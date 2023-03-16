import { mascotaToModel, perroToModel } from "../mappers/localMascotaToModel"

export function renderMascota ( dataValue, tipo ) {
  const mascota = (tipo === 'mascota')
     ? mascotaToModel(dataValue)
     : perroToModel(dataValue)
    const {id, nombre, raza, alimentacion, peso} = mascota.getData()
    const renderEl = document.querySelector('#content')
    renderEl.innerHTML = `Id: ${id} <br>` 
    renderEl.innerHTML += `nombre: ${nombre}<br>`
    renderEl.innerHTML += mascota.raza ? `Raza: ${raza}<br>` : ''
    renderEl.innerHTML += mascota.alimentacion ? `Alimentacion: ${alimentacion}<br>` : ''
    renderEl.innerHTML += mascota.peso ? `Peso: ${peso}<br>` : ''
  }