"use client";
import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  const [label, setLabel] = useState("Copy email");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
      setStatus("Email address copied to your clipboard.");
    } catch {
      setStatus(`Could not copy. The address is ${email}.`);
    }
    setTimeout(() => { setLabel("Copy email"); setStatus(""); }, 2500);
  }

  return (
    <>
      <button className="copy-btn" type="button" onClick={copy}>{label}</button>
      <p className="copy-status" role="status" aria-live="polite">{status}</p>
    </>
  );
}
