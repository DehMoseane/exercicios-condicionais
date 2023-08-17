const tipoDePagamento = "credito";
const valorDoProduto = 130.00;

if (tipoDePagamento === "credito") {
    const valorFinalCredito = valorDoProduto - (valorDoProduto * 5 / 100);
    console.log(`Valor a ser pago: R$${valorFinalCredito}`)

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorAvista = valorDoProduto - (valorDoProduto * 10 / 100);
    console.log(`Valor a ser pago: R$${valorAvista}`)

} else if (tipoDePagamento === "cheque" || tipoDePagamento === "cheque") {
    const valorFcheque = valorDoProduto - (valorDoProduto * 3 / 100);
    console.log(`Valor a ser pago: R$${valorFcheque}`);
} else {
    console.log("Forma de pagamento inválida.");
}