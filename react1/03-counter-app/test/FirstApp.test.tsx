import { render } from "@testing-library/react";
import { FirstApp } from "../src/components/FirstApp";
describe("Pruebas en <FirstApp />", () => {
  //No recomendable hacerlo durante el desarrollo
  /*test("Debe de hacer match con el snapshot", () => {
    const name = "Lara";
    const { container } = render(<FirstApp name={name} />);
    expect(container).toMatchSnapshot();
  });*/
  test("Debe de mostrar el título en un h1", () => {
    const name = "Lara";
    const title = `${name}'s first App`;
    const { getByText, getByTestId } = render(<FirstApp name={name} />);
    expect(getByText(title)).toBeTruthy();

    //No es recomendable usarlo así
    //const h1 = container.querySelector("h1");
    //expect(h1?.innerHTML).toContain(title);

    expect( getByTestId('test-title').innerHTML).toContain(title);
  });
  test("Debe de mostrar el nombre enviado por props", () => {
    const name = "Lara";
    const subtitulo = "Subtitulo";
    const { getAllByText} = render(<FirstApp name={name} subtitulo={subtitulo}/>);
    //getByText da error si aparece más de una vez
    //expect(getByText(subtitulo)).toBeTruthy();

    //Para evitar errores si está repe
    expect(getAllByText(subtitulo)).toHaveLength(2);

  });
});
