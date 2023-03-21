function convertir(numero) {
    if (numero <= 0) return "";
    if (numero <=3) return convertir(numero-1)+"I";
    if (numero ==4) return "IV" 
}
export default convertir;