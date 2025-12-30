import { useRef } from "react";

export function FocusScreen() {
  const inputRef = useRef<HTMLInputElement|null>(null);

  const handleClick = ()=>{
    inputRef.current?.select();
    //inputRef.current?.focus();
  }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <input
        type="text"
        name=""
        id=""
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
        ref={inputRef}
      />
      <button className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:cursor-pointer" onClick={handleClick}>
        Set focus
      </button>
    </div>
  );
}
