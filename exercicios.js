// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura= +prompt("Escreva a altura do retângulo:")
  let largura= +prompt("Escreva a largura do retângulo:")
  resultado=altura*largura;
  console.log(resultado);
  // implemente sua lógica aqui

}

// EXERCÍCIO 02
function imprimeIdade() {

  anoAtual=+prompt("Escreva seu ano atual")
  anoNascimento=+prompt("Escreva seu ano de nascimento")
  idade=anoAtual-anoNascimento
console.log(idade)

  // implemente sua lógica aqui

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc = peso/(altura*altura)
return imc


  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt('Escreva seu nome:')
const idade = prompt('Escreva sua idade:')
const email = prompt('Escreva seu e-mail:')
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cores=[]
cores.push(prompt("Diga sua primeira cor favorita"))
cores.push(prompt("Diga sua segunda cor favorita"))
cores.push(prompt("Diga sua terceira cor favorita"))
console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
string=string.toUpperCase()
return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const ingressosVendidos = custo/valorIngresso
return ingressosVendidos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const ultimo = array.pop()
const primeiro = array.shift()
array.unshift(ultimo)
array.push(primeiro)
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()

  return string1===string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual=prompt("Escreva ano atual")
const anoNascimento=prompt("Escreva ano nascimento")
const anoCarteiraEmitida=prompt("Escreva ano em que sua carteira foi emitida")



const idade = anoAtual-anoNascimento
const tempoDeCarteira = anoAtual - anoCarteiraEmitida


const resultado1 = idade<=20&&tempoDeCarteira>=5
const resultado2 = idade>20&&idade<=50&&tempoDeCarteira>=10
const resultado3 = idade>50&&tempoDeCarteira>=15

console.log(resultado1||resultado2||resultado3);


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

const maiorDe18 = prompt("Tu és maior de 18? Responda com sim ou não")
const ehMaiorde18 = maiorDe18.includes("sim") 

const ensinoMedio = prompt("Tu tens ensino médio completo? Responda com sim ou não")
const temEnsinoMedio = ensinoMedio.includes("sim")

const disponibilidade = prompt("Tu tens disponibilidade exclusiva durante os horários do curso? Responda com sim ou não")
const temDisponibilidade = disponibilidade.includes("sim")

console.log(ehMaiorde18&&temEnsinoMedio&&temDisponibilidade);
}