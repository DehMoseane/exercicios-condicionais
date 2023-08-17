const idade = 19;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log("Acesso Negado!");

} else if (ehEstudante === true || idade < 18) {
    console.log("Você paga R$ 10,00 (meia entrada).");
} else {
    console.log("Você paga R$ 20.00");
}

