const aposentada = false;
const portadoraDeDoenca = false;
const totalDerENDIMENTOS = 20.00000;

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("Isento!");
} else if (totalDerENDIMENTOS > 28.55970) {
    console.log("Pega Leão!");
} else {
    console.log("Vaza leão! Ja ta dificil sem você.");
}

