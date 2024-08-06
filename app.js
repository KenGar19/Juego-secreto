let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10
console.log(numeroSecreto)
//console.log(numeroSecreto)
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento)
  elementoHTML.innerHTML = texto
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      'p',
      `acertaste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} `
    )
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'el numero es menor')
    } else {
      asignarTextoElemento('p', 'el numero es mayor')
    }
    intentos++
    limpiarCaja()
  }

  return
}
function limpiarCaja() {
  document.querySelector('#valorUsuario').value = ''
}
function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del numero secreto')
  asignarTextoElemento('p', `'digite un numero del 1 al ${numeroMaximo}`)
  numeroSecreto = generarNumeroSecreto()
  intentos = 1
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1
  console.log(numeroGenerado)
  console.log(listaNumerosSorteados)
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros')
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto()
    } else {
      listaNumerosSorteados.push(numeroGenerado)
      return numeroGenerado
    }
  }
}
function reiniciarJuego() {
  limpiarCaja()
  condicionesIniciales()
  document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales()
