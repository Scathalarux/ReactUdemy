import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp2 } from "../src/components/CounterApp2";

describe("Pruebas para <CounterApp2 />", () => {
  const initialValue = 100;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp2 value={initialValue} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe mostrar el valor inicial de 100 <CounterApp2 value={100} />", () => {
    render(<CounterApp2 value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp2 value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(101)).toBeTruthy();
  });
  test("Debe de disminuir con el botón -1", () => {
    render(<CounterApp2 value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(99)).toBeTruthy();
  });
  test("Debe de volver al valor inicial con el botón Reset", () => {
    render(<CounterApp2 value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByRole('button',{name:"btnReset"}));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
