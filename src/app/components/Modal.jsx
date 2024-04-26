import React, { useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function Modal({ children }) {
  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <div className="flex min-h-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
