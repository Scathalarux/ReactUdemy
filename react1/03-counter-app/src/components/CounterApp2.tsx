import { useState } from "react";

type CounterApp2Props = {
  value?: number;
};

export function CounterApp2({ value = 0 }: CounterApp2Props) {
  const [contador, setContador] = useState<number>(value);
  const handleClick = () => {
    const newContador = contador + 1;
    setContador(newContador);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2> {contador} </h2>
      <button onClick={handleClick}> +1 </button>
    </>
  );
}
