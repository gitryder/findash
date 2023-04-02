import axios from "axios";

import { createClient } from "@supabase/supabase-js";
import { Expense, Income } from "@interfaces";

import { Configuration, OpenAIApi } from "openai";

const Supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const OpenAI = new OpenAIApi(configuration);

const API = {
  expenses: {
    getAllExpenses: () => {
      return Supabase.from("expenses").select();
    },
    addExpense: (expense: Expense) => {
      return axios.post("/api/expense/add", expense);
    },
  },

  income: {
    getAllIncome: () => {
      return Supabase.from("income").select();
    },
    addIncome: (income: Income) => {
      return axios.post("/api/income/add", income);
    },
  },

  getSavings: () => {
    return axios.get("/api/savings");
  },

  getGlanceStats: () => {
    return axios.get("/api/glance");
  },
};

export { API, Supabase, OpenAI };
