import { useCallback, useState } from "react";
import { MySubtitle } from "./ui/MySubtitle";
import { MyTitle } from "./ui/MyTitle";

const handleMyApiCall = (value: string) => {
  console.log("Llamar a mi Api - " + value);
};
export function MemoHook() {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

  /*const handleMyAPICall = useCallback(() => {
    console.log("Llamar a mi API - ", subtitle);
  }, [subtitle]);*/
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="font-thin text-2xl text-white">Memo app</h1>

      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} callMyAPI={handleMyApiCall(subtitle)} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Hello")}
      >
        Cambiar título
      </button>
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle("World")}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
}
