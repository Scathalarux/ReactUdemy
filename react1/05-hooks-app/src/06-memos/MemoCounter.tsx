import { useCounter } from "@/hooks/03-useCounter";
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time("Heavy_stuff_started");
  for (let index = 0; index < iterationNumber; index++) {
    console.log("ahí vamos...");
  }
  console.timeEnd("Heavy_stuff_started");
  return `${iterationNumber} iteraciones realizadas`;
};

export function MemoCounter() {
  const { counter, increment } = useCounter(10);
  const { counter: counter2, increment: increment2 } = useCounter(20);
  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="font-thin text-2xl text-white">Memo counter</h1>
      <hr />

      <h4>Counter:{counter}</h4>
      <h4>Counter2:{counter2}</h4>

      <button
        onClick={increment}
        className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        +1
      </button>
      <button
        onClick={increment2}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        +1
      </button>
    </div>
  );
}
