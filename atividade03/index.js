import { soma, subtracao, multiplicacao, divisao } from "./calculadora.js";

console.log("Soma", soma(10, 5));
console.log("Subtração", subtracao(10, 5));
console.log("Multiplicacao", multiplicacao(10, 5));
console.log("Divisao", divisao(10, 5)); 

import moment from 'moment';

function CalcularIdade(anoNascimento) {
    const dataNascimento = moment(`${anoNascimento}-01-01`, 'YYYY-MM-DD');
    return CalcularIdade = moment().diff(dataNascimento, 'years');
}

const anoNascimento = 2005;
const idade = CalcularIdade(anoNascimento);
console.log("Sua idade é:", idade);