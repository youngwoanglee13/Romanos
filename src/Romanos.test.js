import convertir from "./Romano.js";

describe("Convertir", () => {
    it("deberia devolver I al enviar 1", () => {
        expect(convertir(1)).toEqual("I");
    });
    it("deberia devolver III al enviar 3", () => {
        expect(convertir(3)).toEqual("III");
    });
});