

export class Mascota {
  #id = 1
  tipo = 'sin definir'
  nombre = 'sin nombre'
  microchip = ''
  sexo = 'f'
  edad = 0


 /**
  * Método constructor donde cargo mascota (al añadir llaves en constructor dentro de parentesis lo "desestructuro")
  * @param {Like<Mascota>} Mascota
  * @param {string} Mascota.tipo Ejemplos: cánido, felino, etc
  * @param {string} Mascota.nombre
  * @param {string} Mascota.microchip
  * @param {string} Mascota.sexo - Formato F/M
  * @param {number} Mascota.edad     En numero entero
  * @param {string} Mascota.id  Identificador unico
  */
  constructor ({tipo = 'Cánido', nombre = 'Desconocido', microchip = '', edad = 0, sexo, id = ''}) {
    this.#id = id
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
    this.sexo = sexo
    this.microchip = microchip
  }
  
  // UN METODO POSIBLE:
  /**
   * Función que permite meter el nombre de una mascota
   * @param {string} nombre Nombre de la mascota 
   */
  setNombre (nombre) {
   if (typeof nombre === 'string' && nombre.length) this.nombre = nombre // <--comprueba que es un string y que tiene longitud (campo NO vacio)
    else throw new Error(`Formato de nombre no válido ${nombre}`)
  }

  /**
   * @param {number} edad
   */

  setEdad (edad) {
    // Un metodo posible:
    // if (Number.isInteger(edad)) this.edad = edad // <-- comprueba que edad = numero entero
    // else if (!isNaN(edad)) {
    //   edad = Number(edad)
    //   if (Number.isInteger(edad)) this.edad = edad
    // }
    // Simplificado:
    if (Number.isInteger(Number(edad))) this.edad = edad
  }


  getId () {
    return this.#id
  }
 
  /**
   * Retorna todas las propiedades de la clase públicas o privadas
   * @returns {object}
   */

  getData () {
    return {
      ...this,  // <--retorna todo lo que hay en 'this'. Los tres puntos (spread) clonan superficialmente (las cosas dentro de cosas no las copia)
      id: this.#id
    }
   
  }
}

