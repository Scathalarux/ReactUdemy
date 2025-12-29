import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["cute", "two"]);

  const handleAddCategory = (newCategorie: string) => {
    setCategories([newCategorie, ...categories]);
  };
  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onNewCategorie={handleAddCategory}/>

      {/* listado de items */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}
