// Método com foreach
const notas = [10, 6.5, 8, 7.5];

let soma = 0;

notas.forEach(function (nota, indice) {
    soma += nota;
    console.log(indice);
});
const media = soma / notas.length;
console.log(`A média das notas é ${media}`)

// Outra forma
notas.forEach(nota => {
    soma += nota;
});
const media1 = soma / notas.length;
console.log(`A média das notas é ${media}`)

function imprimiNotas() {
    console.log(notas);
}

notas.forEach(imprimiNotas);