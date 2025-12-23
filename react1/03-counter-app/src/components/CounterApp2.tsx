import { useState } from "react";

type CounterApp2Props = {
  value?: number;
};

export function CounterApp2({ value = 10 }: CounterApp2Props) {
  //Cuando cambia el estado, el componente se vuelve a ejecutar
  const [contador, setContador] = useState<number>(value);

  
  const handleAdd = () => {
    const newContador = contador + 1;
    setContador(newContador);
    //setContador(c=> c+1)
  };
  const handleSubtract = () => {
    const newContador = contador - 1;
    setContador(newContador);
  };
  const handleReset = () => {
    setContador(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2> {contador} </h2>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
}
