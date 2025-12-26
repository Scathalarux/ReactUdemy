import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Preubas en 02-template-string',()=>{
    test('getSaludo debe retornar "Hola Lara"',()=>{
        const name = "Lara";
        const message = getSaludo(name);
        const message2 = "Hola Lara";

        expect(message).toBe(message2);
    })
});