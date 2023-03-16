

export class Mascota {
  #id = 1
  tipo = 'sin definir'
  nombre = 'sin nombre'
  microchip = ''
  sexo = 'f'
  edad = 0


 /**
  * Método constructor donde cargo mascota (al añadir llaves en constructor dentro de parentesis lo "desestructuro")
  * @param {MascotaLike: Object} Mascota
  * @param {string} Mascota.type Ejemplos: cánido, felino, etc
  * @param {string} Mascota.name
  * @param {string} Mascota.microchip
  * @param {number} Mascota.edad     En numero entero
  * @param {string} Mascota.id  Identificador unico
  */
  constructor ({type = 'Cánido', name = 'Desconocido', microchip = '', age = 0, sexo, id = ''}) {
    this.#id = id
    this.tipo = type
    this.nombre = name
    this.age = age
    this.sexo = sexo
    this.microchip = microchip
  }
  
  // UN METODO POSIBLE:
  /**
   * Función que permite meter el nombre de una mascota
   * @param {string} name Nombre de la mascota 
   */
  setNombre (name) {
   if (typeof name === 'string' && name.length) this.nombre = name // <--comprueba que es un string y que tiene longitud (campo NO vacio)
    else throw new Error(`Formato de nombre no válido ${name}`)
  }

  /**
   * @param {number} edad
   */

  set age (edad) {
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
   * Retorna una lista html con todas las propiedades de la clase
   * @returns {string}
   */

  getData () {
    return `
      <ul>
        <li><strong>Código</strong> ${this.#id}</li>
        <li><strong>Microchip</strong> ${this.microchip}</li>
        <li><strong>Nombre</strong> ${this.nombre}</li>
        <li><strong>Tipo</strong> ${this.tipo}</li>
        <li><strong>Edad</strong> ${this.edad}</li>
        <li><strong>Sexo</strong> ${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
      </ul>    
    `
  }
}

