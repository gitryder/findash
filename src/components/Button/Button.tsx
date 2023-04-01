import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button>
      <style jsx>{`
        button {
          padding: 14px;
          border-radius: 8px;
          background-color: hsl(0, 0%, 100%);
          border: 4px solid hsla(0, 0%, 93%, 1);
          cursor: pointer;
        }
        button:hover {
          background-color: hsl(0, 0%, 97%);
        }
        button:active {
          background-color: hsl(0, 0%, 93%);
        }
      `}</style>
      {children}
    </button>
  );
};

export { Button };
