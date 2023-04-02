import React from "react";
import { colors } from "@styles/colors";

const Input = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: React.InputHTMLAttributes<HTMLInputElement>["placeholder"];
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <style jsx>
        {`
          label {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            color: ${colors.grey.lighter};
          }

          input {
            padding: 1.25rem 1rem;
            border: 2px solid ${colors.grey.light};
            border-radius: 0.5rem;
            font-size: 1.5rem;
          }
        `}
      </style>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { Input };
