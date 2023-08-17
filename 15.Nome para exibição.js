const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

// Uso de operadores lógicos para determinar o que imprimir
if (apelido && sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
} else {
    console.log(primeiroNome);
}
