import { Mascota } from './Mascota'



export class Perro extends Mascota {
  raza 
  alimentacion 
  peso 


  /**
  * 
  * @param {Like<Perro>} Perro De la clase Mascota
  * @param {string} Perro.tipo Ejemplos: cánido, felino, etc
  * @param {string} Perro.nombre
  * @param {string} Perro.microchip
  * @param {number} Perro.edad     En numero entero
  * @param {string} Perro.id  Identificador unico 
  * @param {string} Perro.raza
  * @param {string} Perro.sexo
  * @param {string} Perro.alimentacion
  * @param {number} Perro.peso
  */

  constructor ({tipo = 'Cánido', nombre = 'Desconocido', microchip = '', edad = 0, sexo, id = '', raza = 'desconocida', alimentacion = '', peso = 0 }) {
    super({nombre, tipo, microchip, edad, sexo, id})
    this.raza = raza
    this.alimentacion = alimentacion
    this.peso = peso
    }


  /**
   * Retorna todas las propiedades de la clase públicas o privadas
   * @returns {object}
   */

  getData () {
      return {
        ...this,
        id: this.getId()
      }
  }
}

