interface BaseEntry {
  name: string;
  amount: number;
}

type Income = BaseEntry;

interface Expense extends BaseEntry {
  tag: string;
}

export type { Income, Expense };
