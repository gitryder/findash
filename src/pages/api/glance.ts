import type { NextApiRequest, NextApiResponse } from "next";
import { Supabase, OpenAI } from "@api";
import { Expense } from "@interfaces";

interface EntryData {
  total: number;
  insight: string;
}

type AtAGlanceResponse = {
  expenses: EntryData;
  income: EntryData;
};

const generateExpensePrompt = (expenses: Array<Expense>) => {
  return `
  This is an array that represents expenses that a user has made in INR.

  Return a JSON object with an "insight" property that gives a suggestion to the user based on the expenses.

  Use the second person pronoun "you" in the insight.

  Please limit it to 15 words.

  ${JSON.stringify(expenses)}
  `;
};

const generateIncomePrompt = (expenses: Array<Expense>) => {
  return `
  This is an array that represents income that a user has made in INR.

  Return a JSON object with an "insight" property that gives a suggestion to the user based on the incomes.

  Use the second person pronoun "you" in the insight.

  Please limit it to 15 words.

  ${JSON.stringify(expenses)}
  `;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<AtAGlanceResponse>
) => {
  const { data: expenseSources } = await Supabase.from("expenses").select();

  const { data: incomeSources } = await Supabase.from("income").select();

  const totalExpenses = expenseSources?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const totalIncome = incomeSources?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const expenseInsightResponse = await OpenAI.createCompletion({
    model: "text-davinci-003",
    prompt: generateExpensePrompt(expenseSources as Array<Expense>),
    max_tokens: 2000,
  });

  const incomeInsightResponse = await OpenAI.createCompletion({
    model: "text-davinci-003",
    prompt: generateExpensePrompt(incomeSources as Array<Expense>),
    max_tokens: 2000,
  });

  const expenseInsight = JSON.parse(
    expenseInsightResponse?.data?.choices?.[0].text ?? ""
  )?.insight;

  const incomeInsight = JSON.parse(
    incomeInsightResponse?.data?.choices?.[0].text ?? ""
  )?.insight;

  res.status(200).json({
    expenses: {
      total: Number(totalExpenses),
      insight: expenseInsight,
    },
    income: {
      total: Number(totalIncome),
      insight: incomeInsight,
    },
  });
};

export default handler;
