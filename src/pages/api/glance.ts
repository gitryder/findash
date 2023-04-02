import type { NextApiRequest, NextApiResponse } from "next";
import { Supabase } from "@api";

interface EntryData {
  total: number;
  insight: string;
}

type AtAGlanceResponse = {
  expenses: EntryData;
  income: EntryData;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<AtAGlanceResponse>
) => {
  const { data: expenseSources } = await Supabase.from("expenses").select();

  const { data: incomeSources } = await Supabase.from("income").select();

  console.log(expenseSources);

  const totalExpenses = expenseSources?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const totalIncome = incomeSources?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  res.status(200).json({
    expenses: {
      total: Number(totalExpenses),
      insight:
        "Try reducing your spends on food & other leisure items to save more",
    },
    income: {
      total: Number(totalIncome),
      insight: "Try creating more passive income sources to maximize income.",
    },
  });
};

export default handler;
