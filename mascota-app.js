import {v4 as generarCodigo } from 'uuid'
import { renderMascota } from './mascotas/renders/render-mascota'
import formRaw from './mascotas/templates/form-mascotas.html?raw' // <-- '?raw' es una opcion de Vite. Convierte html a js





/**
 * Gestionar eventos del formulario
 * @param {HTMLFormElement} formElement 
 */
function gestionFormulario (formElement) {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault()

    // Obtención de datos del formulario
    const name = formElement.name.value.trim()
    const microchip = formElement.microchip.value.trim()
    const type = formElement.type.value.trim()
    const gender = formElement.gender.value.trim()
    const age = Number(formElement.age.value)
    
    const data = {
      name, 
      microchip, 
      type, 
      gender, 
      age, 
      id: generarCodigo()
    }
    if (formElement['tipo-mascota'].value === 'mascota') {
      renderMascota(data, 'mascota')
    } else {
      const weight = Number(formElement.weight.value)
      const food = formElement.food.value
      const race = formElement.race.value
      renderMascota({weight, food, race, ...data}, 'perro')
    }
  })
}
function manipulacionFormulario(formElement) {
  formElement.querySelector('#range-age').addEventListener('input', (e) => {
    const input = e.target
    formElement.querySelector('#age').value = input.value // <-- mete el valor en el input del deslizador
  })
  formElement['tipo-mascota'].addEventListener('change', e => {
    const select = e.target
    const divElement = element.querySelector('#otros-campos')
    if (select.value === 'perro') {
      // Muestro campos
      divElement.classList.remove('oculto')
    } else {
      // Oculto campos
      divElement.classList.add('oculto')
    }
    })
  
}


/**
 * Punto de entrada de la aplicación
 * @param {HTMLDivElement} rootElement 
 */
export function mascotaApp (rootElement) {
  if (!rootElement) throw new Error('Elemento raiz no encontrado')
    rootElement.innerHTML = '<h1>Mascotas</h1>'
    rootElement.innerHTML += formRaw // <-- '+=' para que concatene (añada) despues del <H1>
    gestionFormulario(rootElement.querySelector('#myForm'))
    manipulacionFormulario(rootElement.querySelector('#myForm'))
  }
