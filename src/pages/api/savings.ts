import type { NextApiRequest, NextApiResponse } from "next";
import { Supabase } from "@api";

type SavingsData = {
  savings: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<SavingsData>
) => {
  const { data: expenseSources } = await Supabase.from("expenses").select(
    "amount"
  );

  const { data: incomeSources } = await Supabase.from("income").select(
    "amount"
  );

  const totalExpenses = expenseSources?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const totalIncome = incomeSources?.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const totalSavings = (totalIncome ?? 0) - (totalExpenses ?? 0) ?? 0;

  res.status(200).json({ savings: Number(totalSavings.toFixed(2)) });
};

export default handler;
