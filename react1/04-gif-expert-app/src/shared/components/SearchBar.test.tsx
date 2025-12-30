import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("Should render searchbar correctly", () => {
    const { container } = render(<SearchBar onNewSearch={() => {}} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("Should render the correct placeholder value", () => {
    const placeholderValue = "test";
    render(<SearchBar onNewSearch={() => {}} placeholder={placeholderValue} />);

    expect(screen.getByPlaceholderText(placeholderValue)).toBeDefined();
  });

  //probar el efecto
  test("Should call onNewSearch with the correct value after 700ms", async () => {
    //para tener info sobre la función a la que se llama
    const onNewSearch = vi.fn();

    //renderizado del componente
    render(<SearchBar onNewSearch={onNewSearch} />);

    //seleccionamos el input para poder gestionar su value
    const input = screen.getByRole("textbox");

    const searchValue = "test";

    //hacemos que cambie el value del input
    fireEvent.change(input, { target: { value: searchValue } });

    //hacer que pasen los 700ms
    //await new Promise(resolve => setTimeout(resolve,701)); //bad option

    //hacer que pase un tiempo sin estar definido y sin crear dependencia al mismo
    await waitFor(() => {
      expect(onNewSearch).toHaveBeenCalled();
      expect(onNewSearch).toHaveBeenCalledWith(searchValue);
    });
  });

  test("Should call only once with the last value (debounce)", async () => {
    //para tener info sobre la función a la que se llama
    const onNewSearch = vi.fn();

    //renderizado del componente
    render(<SearchBar onNewSearch={onNewSearch} />);

    //seleccionamos el input para poder gestionar su value
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.change(input, { target: { value: "te" } });
    fireEvent.change(input, { target: { value: "tes" } });
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(onNewSearch).toHaveBeenCalledWith("test");
      expect(onNewSearch).toHaveBeenCalledTimes(1);
    });
  });

  test("Should call onNewSearch when button click", async () => {
    //para tener info sobre la función a la que se llama
    const onNewSearch = vi.fn();

    //renderizado del componente
    render(<SearchBar onNewSearch={onNewSearch} />);

    //seleccionamos el input para poder gestionar su value
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });

    //seleccionamos el bottón para poder ejecutar el click sobre él
    const button = screen.getByRole("button");
    fireEvent.click(button);

    //no utilizamos el waitfor porque es síncrono
    expect(onNewSearch).toHaveBeenCalledWith("t");
    expect(onNewSearch).toHaveBeenCalledTimes(1);
  });
  test("Should call onNewSearch when press enter", async () => {
    //para tener info sobre la función a la que se llama
    const onNewSearch = vi.fn();

    //renderizado del componente
    render(<SearchBar onNewSearch={onNewSearch} />);

    //seleccionamos el input para poder gestionar su value
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "t" } });
    fireEvent.keyDown(input,{ key: 'Enter' } );

    //no utilizamos el waitfor porque es síncrono
    expect(onNewSearch).toHaveBeenCalledWith("t");
    expect(onNewSearch).toHaveBeenCalledTimes(1);
  });
});
