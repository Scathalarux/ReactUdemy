import { useState, type ChangeEvent, type FormEvent } from "react";

type AddCategoryProps = {
  onNewCategorie: (newCategorie:string) => void
}

export function AddCategory({onNewCategorie}:AddCategoryProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const newCategorie = inputValue.trim();

    if(newCategorie.length <= 2) return;
    
    onNewCategorie(newCategorie);
    
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar gatitos..."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
