import React from "react";
import { Text, Input, Button, Dialog } from "@components";
import { colors } from "@styles/colors";

import { useAddIncome } from "@mutations/useAddIncome";

const initialExpense = {
  name: "",
  amount: 0,
};

const AddIncomeModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const [{ name, amount }, setExpense] = React.useState(initialExpense);

  const { mutate: addIncome } = useAddIncome();

  const onAddClick = () => {
    addIncome(
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
      <Text size={2}>Add income</Text>
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
          placeholder="E.g. SkillShare Earnings"
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
          placeholder="25000"
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
          + Add income
        </Text>
      </Button>
    </Dialog>
  );
};

export { AddIncomeModal };
