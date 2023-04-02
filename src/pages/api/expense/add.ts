import type { NextApiRequest, NextApiResponse } from "next";
import { Expense } from "@interfaces";

import { Supabase, OpenAI } from "@api";

const generatePrompt = (expense: Expense) => {
  return `
  This is an object that represents and expense.

  Return this JSON object with a "tag" property to categorize it.
  
  Use an emoji along with text in the tag name. Choose from tags in this array:
  
  [
    '🍕 Food & Drinks',
    '🚕 Travel',
    '🥊 Unplanned',
    '📺 Entertainment',
    '🔨 Utilities',
    '👕 Clothing',
    '💸 Investment'
  ]

  Also, please return it as part of the original expense object.

  ${JSON.stringify(expense)}
  `;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const expense = req.body as Expense;

  const response = await OpenAI.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(expense),
    max_tokens: 2000,
  });

  const taggedExpense = JSON.parse(response?.data?.choices?.[0].text ?? "");

  await Supabase.from("expenses").insert({ ...taggedExpense });

  res.status(200).json({ message: "Expense added" });
};

export default handler;
