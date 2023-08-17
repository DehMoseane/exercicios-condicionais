const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorParcela = valorDoProduto / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - Math.ceil(valorPago / valorParcela);

if (parcelasRestantes === 1) {
    console.log(`Resta 1 parcela de R$${valorParcela.toFixed(2)}`);
} else if (parcelasRestantes > 1) {
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela.toFixed(2)}`);
} else {
    console.log("Pagamento concluído.");
}
