const rendaMensalEmCentavos = 2.00000;
const mesesDecorridos = 30;
const totalJaPagoPeloAluno = 1000000;
const valorCursoEmCentavos = 18.00000; // 18.000,00 reais em centavos

const rendaMinimaEmCentavos = 2.00000; // 2.000,00 reais em centavos
const percentualParcela = 0.18; // 18% do valor da renda

if (mesesDecorridos <= 60 && totalJaPagoPeloAluno < valorCursoEmCentavos) {
    let valorParcelaEmCentavos = Math.min(rendaMensalEmCentavos * percentualParcela, valorCursoEmCentavos - totalJaPagoPeloAluno);

    if (rendaMensalEmCentavos < rendaMinimaEmCentavos) {
        valorParcelaEmCentavos = 0;
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    } else {
        console.log(`O valor da parcela desse mês é R$ ${(valorParcelaEmCentavos / 100).toFixed(2)} reais.`);
    }
} else {
    console.log(`O aluno não deve mais nada. O valor da parcela é zero.`);
}
