import { useState } from "react";
import { PrimaryButton } from "./components/Button";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Parent Component</h1>
      <PrimaryButton name="Roshni" />
    </>
  );
}
