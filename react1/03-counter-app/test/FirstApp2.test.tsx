import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/components/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const name      = "Lara";
  const title     = `${name}'s first App`;
  const subtitulo = "Subtitulo";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp name={name} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el título "Lara\'s first App"', () => {
    //screen = objeto que estamos renderizando
    render(<FirstApp name={name} />);
    expect(screen.getByText(title)).toBeTruthy();

    expect(screen.getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el título en un h1", () => {
    render(<FirstApp name={name} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp name={name} subtitulo={subtitulo} />);
    expect(screen.getAllByText(subtitulo)).toHaveLength(2);
  });
});
