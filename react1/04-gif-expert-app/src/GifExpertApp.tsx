import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["cute", "two"]);

  const handleAddCategory = () => {
    setCategories(["black", ...categories]);
  };
  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories}/>

      {/* listado de items */}
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}
