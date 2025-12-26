import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const testObj = {
      nombreClave: "Ironman",
      anios: 45,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    const persona = {
      nombre: "Tony",
      edad: 45,
      clave: "Ironman",
    };
    const obj = usContext(persona);
    expect(testObj).toEqual(obj);
  });
});
