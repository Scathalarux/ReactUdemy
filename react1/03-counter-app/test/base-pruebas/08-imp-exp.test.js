import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe con el id indicado", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test("getHeroeById debe retornar undefined si no existe el id", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    //expect(heroe).toBeUndefined();

    //interpretamos que pueda ser undefined, null o false
    expect(heroe).toBeFalsy();
  });
  /*
    - Debe retornar un arrya con los heroes de DC, 
      Length === 3
      toEqual al array filtrado
  */
  test("getHeroeByOwner debe retornar los heroes con el owner DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(3);
    expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
  });
  /*
    - Debe retornar un array con los heroes de Mervel
      Length === 2
  */
  test("getHeroeByOwner debe retornar los heroes con el owner Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toHaveLength(2);
    expect(heroes).toEqual(heroes.filter(heroe => heroe.owner === owner));
  });
  
});
