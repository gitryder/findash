import React from "react";

const Button = ({
  disabled,
  children,
  onClick,
}: {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <style jsx>{`
        button {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          background-color: hsl(0, 0%, 100%);
          border: 4px solid hsla(0, 0%, 93%, 1);
          cursor: pointer;
        }
        button:hover {
          background-color: ${disabled ? "transparent" : "hsl(0, 0%, 97%)"};
        }
        button:active {
          background-color: hsl(0, 0%, 93%);
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background-color: hsl(0, 0%, 93%);
          border: 4px solid hsla(0, 0%, 89%, 1);
        }
      `}</style>
      {children}
    </button>
  );
};

export { Button };
