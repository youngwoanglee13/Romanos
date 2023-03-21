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
    it("deberia devolver X al enviar 10", () => {
        expect(convertir(10)).toEqual("X");
    });
    it("deberia devolver XXXIX al enviar 39", () => {
        expect(convertir(39)).toEqual("XXXIX");
    });
    it("deberia devolver XLIX al enviar 49", () => {
        expect(convertir(49)).toEqual("XLIX");
    });
    it("deberia devolver LXXXIX al enviar 89", () => {
        expect(convertir(89)).toEqual("LXXXIX");
    });
    it("deberia devolver XCIX al enviar 99", () => {
        expect(convertir(99)).toEqual("XCIX");
    });  
    it("deberia devolver C al enviar 100", () => {
        expect(convertir(100)).toEqual("C");
    });
          
    
});