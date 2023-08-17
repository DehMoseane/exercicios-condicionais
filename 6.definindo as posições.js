const alturaEmCm = 177;

if (alturaEmCm >= 180 && alturaEmCm < 185) {
    console.log("Parabens! Aprovado para jogar na posição de líbero.");
} else if (alturaEmCm >= 186 && alturaEmCm < 195) {
    console.log("Parabens! Aprovado para jogar na posição de Ponteiro.");
} else if (alturaEmCm >= 196 && alturaEmCm < 205) {
    console.log("Parabens! Aprovado para jogar na posição de Oposto.");

} else if (alturaEmCm > 205) {
    console.log("Parabens! Aprovado para jogar na posição de central");

} else if (alturaEmCm < 180) {
    console.log("Reprovado!");
}