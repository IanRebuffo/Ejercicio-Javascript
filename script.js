
let nombre = "Ian"

let edad = 20

let localidad = "Wilde"

//  alert("Hola " + nombre + " bienvenido!")

nombre = prompt("Ingrese su nombre:")

let actualidad = new Date("05/31/2024")
let nacimiento = new Date(prompt("Indique su fecha de nacimiento:"))


let milisegundosDia = 24 * 60 * 60 * 1000

let milisegundosTranscurridos = Math.abs(actualidad.getTime() - nacimiento.getTime())

let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia)

console.log(diasTranscurridos)

alert(nombre + ", han transcurrido " + diasTranscurridos + " dias desde que estas vivo!")