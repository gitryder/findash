import React from "react";
import { BorderedBox, ColoredBox, H5, Text, Button } from "@components/";

import { useExpenses } from "@queries/useExpenses";
import { useIncome } from "@queries/useIncome";

import { AddExpenseModal } from "@components/AddExpenseModal";
import { AddIncomeModal } from "@components/AddIncomeModal";

type EntryType = "expense" | "income";

interface BaseProps {
  type: EntryType;
}

const CashFlow = () => {
  const { data: expenses } = useExpenses();

  const { data: income } = useIncome();

  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] =
    React.useState(false);

  const [isAddIncomeModalOpen, setIsAddIncomeModalOpen] = React.useState(false);

  const onAddExpense = () => {
    setIsAddExpenseModalOpen(true);
  };

  const onAddIncome = () => {
    setIsAddIncomeModalOpen(true);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2.25rem",
      }}
    >
      <EntryList type="expense" data={expenses} onEntryAdd={onAddExpense} />
      <EntryList type="income" data={income} onEntryAdd={onAddIncome} />

      <AddExpenseModal
        isOpen={isAddExpenseModalOpen}
        onClose={() => {
          setIsAddExpenseModalOpen(false);
        }}
      />

      <AddIncomeModal
        isOpen={isAddIncomeModalOpen}
        onClose={() => {
          setIsAddIncomeModalOpen(false);
        }}
      />
    </div>
  );
};

const EntryList = ({
  type,
  data,
  onEntryAdd,
}: BaseProps & {
  data:
    | ReturnType<typeof useExpenses>["data"]
    | ReturnType<typeof useIncome>["data"];
  onEntryAdd?: () => void;
}) => {
  const color = type === "expense" ? "red" : "green";

  return (
    <BorderedBox
      style={{
        width: "100%",
        minHeight: "730px",
        ...(type === "expense"
          ? {
              justifyContent: "space-between",
            }
          : {}),
      }}
      gap={2}
    >
      <H5 color={color}>
        Your{" "}
        {type
          .charAt(0)
          ?.toUpperCase()
          .concat(type.slice(1))
          .concat(type === "expense" ? "s" : "")}
      </H5>
      <div
        style={{
          height: "100%",
          display: "flex",
          gap: "1.5rem",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* // TODO(gitryder): Type entry */}
          {data?.map((entry: any) => (
            <ExpenseEntry key={entry?.id} type={type} {...entry} />
          ))}
        </div>
        <Button
          onClick={() => {
            onEntryAdd?.();
          }}
        >
          <Text size={2} color={color}>
            Add {type === "expense" ? "an expense" : "income"}
          </Text>
        </Button>
      </div>
    </BorderedBox>
  );
};

const ExpenseEntry = ({
  type,
  name,
  tag,
  amount,
}: BaseProps & {
  name: string;
  amount: number;
  tag?: string;
}) => {
  const color = type === "expense" ? "red" : "green";

  const typeSymbol = type === "expense" ? "-" : "+";

  const showTag = type === "expense";

  return (
    <ColoredBox
      direction="column"
      style={{
        width: "100%",
        borderRadius: "4px",
      }}
      color={color}
    >
      <Text size={1.5} color={color}>
        {name}
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Text size={2.5} color={color}>
          {typeSymbol} ₹{amount}
        </Text>
        {showTag && (
          <div
            style={{
              width: "max-content",
              padding: "0.125rem 0.75rem",
              border: "2px solid hsla(360, 37%, 78%, 1)",
              borderRadius: "8px",
              backgroundColor: "white",
              color: "hsla(360, 37%, 67%, 1)",
            }}
          >
            <Text size={1}>{tag}</Text>
          </div>
        )}
      </div>
    </ColoredBox>
  );
};

export { CashFlow };
