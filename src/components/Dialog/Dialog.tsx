import React from "react";
import { Dialog as _Dialog } from "@headlessui/react";

const Dialog = ({
  isOpen,
  children,
  onClose,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <_Dialog open={isOpen} onClose={onClose}>
      <style jsx>
        {`
          .dialog--overlay {
            position: fixed;
            background-color: hsla(0, 0%, 0%, 0.5);
            inset: 0;
          }

          .dialog--content-container {
            position: fixed;
            inset: 0;
          }
        `}
      </style>
      <div className="dialog--overlay" />
      <div className="dialog--content-container">
        <_Dialog.Panel
          className="dialog--content"
          style={
            {
              "--dialog-max-width": "868px",
              maxWidth: "var(--dialog-max-width)",
              backgroundColor: "white",
              margin: 'auto',
              transform: "translateY(30%)",
              borderRadius: "0.5rem",
              padding: "1rem",
            } as React.CSSProperties
          }
        >
          {children}
        </_Dialog.Panel>
      </div>
    </_Dialog>
  );
};

export { Dialog };
