import convertir from "./Romano.js";

describe("Convertir", () => {
    it("deberia devolver I al enviar 1", () => {
        expect(convertir(1)).toEqual("I");
    });
    it("deberia devolver III al enviar 3", () => {
        expect(convertir(3)).toEqual("III");
    });
    it("deberia devolver IV al enviar 4", () => {
        expect(convertir(4)).toEqual("IV");
    });
    it("deberia devolver V al enviar 5", () => {
        expect(convertir(5)).toEqual("V");
    });
    it("deberia devolver VIII al enviar 8", () => {
        expect(convertir(8)).toEqual("VIII");
    });
    it("deberia devolver IX al enviar 9", () => {
        expect(convertir(9)).toEqual("IX");
    });
});