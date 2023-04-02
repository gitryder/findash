import React from "react";
import { Text, Input, Button, Dialog } from "@components";
import { colors } from "@styles/colors";

import { useAddExpense } from "@mutations/useAddExpense";

const initialExpense = {
  name: "",
  amount: 0,
};

const AddExpenseModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const [{ name, amount }, setExpense] = React.useState(initialExpense);

  const { mutate: addExpense } = useAddExpense();

  const onAddClick = () => {
    addExpense(
      { name, amount },
      {
        onSuccess: () => {
          props.onClose?.();
          setExpense(initialExpense);
        },
      }
    );
  };

  return (
    <Dialog {...props}>
      <Text size={2}>Add an expense</Text>
      <Text size={2} color={colors.grey.light}>
        -----------------------------------------------------------
      </Text>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1.5rem",
          gap: "10px",
        }}
      >
        <Input
          label="Name"
          value={name}
          placeholder="E.g. Coffee at Starbucks"
          onChange={(event) => {
            setExpense((expense) => ({
              ...expense,
              name: event.target.value,
            }));
          }}
        />

        <Input
          label="Amount"
          type="number"
          value={String(amount)}
          placeholder="876.22"
          onChange={(event) => {
            setExpense((expense) => ({
              ...expense,
              amount: Number(event.target.value),
            }));
          }}
        />
      </div>

      <Button onClick={onAddClick} disabled={name === "" || amount === 0}>
        <Text size={2} color="purple">
          + Add expense
        </Text>
      </Button>
    </Dialog>
  );
};

export { AddExpenseModal };
