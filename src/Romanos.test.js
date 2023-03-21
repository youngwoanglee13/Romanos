import convertir from "./Romano.js";

describe("Convertir", () => {
    it("deberia devolver I al enviar 1", () => {
        expect(convertir(1)).toEqual("I");
    });
});