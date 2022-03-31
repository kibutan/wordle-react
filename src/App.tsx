import { useState } from "react";
import WordRow from "./WordRow";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto w-96">
      <header className="border-b border-gray-500 pb-4 mb-2">
        <h1 className="text-4xl text-center">Reacdle</h1>
      </header>

      <main className="grid grid-rows-6 gap-4">
        <WordRow letters="hello" />
        <WordRow letters="solar" />
        <WordRow letters="penny" />
        <WordRow letters="snack" />
        <WordRow letters="stare" />
        <WordRow letters="he" />
      </main>
    </div>
  );
}
