import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("retornaArreglo debe retornar un string y un numero", () => {
    const testLetters = "ABC";
    const testNumbers = 123;
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe(testLetters);
    expect(numbers).toBe(testNumbers);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
