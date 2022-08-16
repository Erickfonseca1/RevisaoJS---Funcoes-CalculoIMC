/* Este script foi projetado para treinar alguns conceitos simples
relacionados à funções, tais como argumentos, parâmetros, delcaração
e também alguns conceitos simples relacionados a condicionais. */

let nome = prompt("Digite seu nome: ")
let massa = prompt("Digite sua massa: ")
let altura = prompt("Digite sua altura (ex: 1.81): ")

let imc = (massa / Math.pow(altura, 2)).toFixed(2)
let classificacao

if (imc < 18.5) {
    classificacao = "Magreza"
} else if (18.5 < imc < 24.9) {
    classificacao = "Normal"
} else if (25.0 < imc < 29.9) {
    classificacao = "Sobrepeso"
} else if (30.0 < imc < 39.9) {
    classificacao = "Obesidade"
} else {
    classificacao= "Obesidade Grave"
}

alert(`${nome}, seu IMC é ${imc} e você está classificado(a) como ${classificacao} `)

