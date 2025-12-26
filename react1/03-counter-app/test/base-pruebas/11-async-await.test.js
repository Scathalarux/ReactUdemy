import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe retornar la url de una imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
  test("getImagen debe retornar un error si no tenemos API key", async () => {
    const url = await getImagen();
    expect(url).toBe('No se encontró la imagen');
  });

});