import {
  useEffect,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";

type SearchBarProps = {
  onNewSearch: (newCategorie: string) => void;
  placeholder?: string;
};

export function SearchBar({
  onNewSearch,
  placeholder = "Buscar...",
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSearch = () => {
    onNewSearch(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  useEffect(() => {
    //DEBOUNCE
    const timeoutSearch = setTimeout(() => {
      onNewSearch(inputValue);
    }, 700);

    return () => clearTimeout(timeoutSearch);
  }, [inputValue]);

  /*const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newCategorie = inputValue.trim();

    if (newCategorie.length <= 2) return;

    onNewSearch(newCategorie);

    setInputValue("");
  };*/

  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
