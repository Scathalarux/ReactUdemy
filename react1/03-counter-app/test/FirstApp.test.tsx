import {render} from '@testing-library/react';
import {FirstApp} from '../src/components/FirstApp'
describe("Pruebas en <FirstApp />", () => {
  test("Debe de hacer match con el snapshot", () => {
    const name = "Lara";
    render(<FirstApp name={name}/>)
  });
});
