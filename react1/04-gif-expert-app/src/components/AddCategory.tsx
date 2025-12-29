import { useState, type ChangeEvent, type FormEvent } from "react";

type AddCategoryProps = {
  setCategories: (categories:string[]) => void
}

export function AddCategory({setCategories}:AddCategoryProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 2) return;
    setCategories((prevCategories:string[]) => [inputValue, ...prevCategories]);
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
