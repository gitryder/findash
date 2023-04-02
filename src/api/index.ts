import { createClient } from "@supabase/supabase-js";
import { Expense, Income } from "@interfaces";

const Supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
);

const API = {
  expenses: {
    getAllExpenses: () => {
      return Supabase.from("expenses").select("*").order("created_at", {
        ascending: false,
      });
    },
    addExpense: (expense: Expense) => {
      return Supabase.from("expenses").insert({ ...expense });
    },
  },

  income: {
    getAllIncome: () => {
      return Supabase.from("income").select("*").order("created_at", {
        ascending: false,
      });
    },
    addIncome: (income: Income) => {
      return Supabase.from("income").insert({ ...income });
    },
  },
};

export { API };
