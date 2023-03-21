function convertir(numero) {
    if (numero <= 0) return "";
    if (numero <=3) return convertir(numero-1)+"I";
    if (numero <=8) return convertir(5-numero)+"V" + convertir(numero-5);
}
export default convertir;