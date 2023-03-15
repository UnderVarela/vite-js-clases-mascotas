import {v4 as generarCodigo } from 'uuid'
import { Mascota } from './models/Mascota'
import formRaw from './templates/form-mascotas.html?raw' // <-- '?raw' es una opcion de Vite. Convierte html a js


/**
 * Gestionar eventos del formulario
 * @param {HTMLFormElement} formElement 
 */
function manipulacionFormulario (formElement) {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    // Validacion de datos
    const nombre = formElement.nombre.value.trim()
    const microchip = formElement.microchip.value.trim()
    const tipo = formElement.tipo.value.trim()
    const genero = formElement.genero.value.trim()
    const edad = Number(formElement.edad.value)

    // Una vez validado instancias la clase y cargas datos
    const p1 = new Mascota({
        type: tipo,
        name: nombre,
        microchip,
        id: generarCodigo(),
        age: edad,
        sexo: genero
      })


    // Una vez hecho todo, muestras los datos
    formElement.querySelector('#content').innerHTML = p1.getData()
  })
  formElement.querySelector('#rango-edad').addEventListener('input', (e) => {
    const input = e.target
    formElement.querySelector('#edad').value = input.value // <-- mete el valor en el input del deslizador
  })
  // const mascota = new Mascota()
  // rootElement.innerHTML += mascota.getData()
}


/**
 * Punto de entrada de la aplicación
 * @param {HTMLDivElement} rootElement 
 */
export function mascotaApp (rootElement) {
  if (!rootElement) throw new Error('Elemento raiz no encontrado')
    rootElement.innerHTML = '<h1>Mascotas</h1>'
    rootElement.innerHTML += formRaw // <-- '+=' para que concatene (añada) despues del <H1>
    manipulacionFormulario(rootElement.querySelector('#myForm'))
  }
