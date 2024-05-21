"use client";
import { useFormStatus } from "react-dom";
export default function Button({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-4 py-2 disabled:cursor-not-allowed disabled:bg-opacity-85 bg-blue-400 text-white rounded block m-auto"
    >
      {children}
    </button>
  );
}
