const caractere = "B";

if (caractere === 'A' || caractere === 'E' || caractere === 'I' || caractere === 'O' || caractere === 'U') {
    console.log("Vogal maiúscula");
} else if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
    console.log("Vogal minúscula");
} else if ((caractere >= 'A' && caractere <= 'Z') || (caractere >= 'a' && caractere <= 'z')) {
    console.log("Consoante");
} else if (caractere >= '0' && caractere <= '9') {
    console.log("É um número");
} else {
    console.log("Caractere inválido");
}
