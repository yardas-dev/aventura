TIPO_ES_MAYOR = 'es mayor (booleano)'
TIPO_NIVEL_PROXIMIDAD = 'nivel de proximidad (decimal)'
TIPOS_VÁLIDOS = [TIPO_ES_MAYOR, TIPO_NIVEL_PROXIMIDAD]
ERROR_TIPO_INVÁLIDO = 'Tipo de pista inválido'
ERROR_RANGO_NO_NUMÉRICO = 'Los parámetros de rango deben ser numéricos'

class Juego {
    #adivinanza = undefined
    #inicioRango = undefined
    #finRango = undefined
    #hasAcertado = false
    #intentos = []
    #tipoPista = undefined

    constructor (tipoPista = TIPO_ES_MAYOR, inicioRango = 1, finRango = 100) {
        if ( ! TIPOS_VÁLIDOS.includes(tipoPista) ) {
            throw ERROR_TIPO_INVÁLIDO
        }

        if ( isNaN(inicioRango) || isNaN(finRango) ) {
            throw ERROR_RANGO_NO_NUMÉRICO
        }

        this.#adivinanza = Math.floor(Math.random() * finRango) + inicioRango
        this.#inicioRango = inicioRango
        this.#finRango = finRango
        this.#tipoPista = tipoPista
    }

    get hasAcertado () {
        return this.#hasAcertado
    }

    get intentos () {
        return this.#intentos
    }

    get pista () {
        let valor = undefined

        if ( this.#hasAcertado ) {
            valor = null
        } else {
            switch ( this.#tipoPista ) {
                case this.TIPO_ES_MAYOR:
                    valor = this.#esMayor()

                case this.TIPO_NIVEL_PROXIMIDAD:
                    valor = this.#obtenerNivelProximidad()

                default:
                    valor = null
            }
        }

        return {
            intento: this.#intento,
            tipo: this.#tipoPista,
            valor
        }
    }

    intentar (n) {
        if ( this.#hasAcertado ) {
            return null
        }

        if ( this.#adivinanza === n ) {
            this.#hasAcertado = true
        }

        this.#intentos.push(n)

        return this.#hasAcertado
    }

    get #intento () {
        return this.#intentos[this.#intentos.length - 1]
    }

    #esMayor () {
        return this.#intento > this.#adivinanza
    }

    #obtenerNivelProximidad () {
        return 0.5 // EN DESARROLLO…
    }
}

export default Juego
