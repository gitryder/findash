import type { NextApiRequest, NextApiResponse } from "next";
import { Income } from "@interfaces";

import { Supabase } from "@api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const income = req.body as Income;

  await Supabase.from("income").insert({ ...income });

  res.status(200).json({ message: "Income added" });
};

export default handler;
