import React from "react";
import { BorderedBox, ColoredBox, H5, Text, Button } from "@components/";

type EntryType = "expense" | "income";

interface BaseProps {
  type: EntryType;
}

const CashFlow = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2.25rem",
      }}
    >
      <EntryList type="expense" />
      <EntryList type="income" />
    </div>
  );
};

const EntryList = ({ type }: BaseProps) => {
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
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <ExpenseEntry
            type={type}
            name="Dominos Pizza"
            amount={583}
            tag="🍲 Food & Drinks"
          />
        </div>
        <Button>
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
