function convertir(numero) {
    if (numero <= 0) return "";
    if (numero <=3) return convertir(numero-1)+"I";
    if (numero <=8) return convertir(5-numero)+"V" + convertir(numero-5);
    if (numero <=39) return convertir(10-numero)+"X"+convertir(numero-10);
    if (numero <=49) return "XL"+convertir(numero-40);
    if (numero <=89) return "L"+convertir(numero-50);
    if (numero <=99) return "XC"+convertir(numero-90);
    if (numero ==100) return "C";
}
export default convertir;