const jogada1 = "papel";
const jogada2 = "pedra";

if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
        console.log("Pedra ganhou");
    } else {
        console.log("Papel ganhou");
    }
} else if (jogada1 === "tesoura") {
    if (jogada2 === "papel") {
        console.log("Tesoura ganhou");
    } else {
        console.log("Pedra ganhou");
    }
} else if (jogada1 === "papel") {
    if (jogada2 === "pedra") {
        console.log("Papel ganhou");
    } else {
        console.log("Tesoura ganhou");
    }
} else {
    console.log("Jogada inválida");
}
