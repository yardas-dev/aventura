class Juego {
    TIPO_ES_MAYOR = 'es mayor (booleano)'
    TIPO_NIVEL_PROXIMIDAD = 'nivel de proximidad (decimal)'

    #adivinanza = undefined
    #inicio_rango = undefined
    #fin_rango = undefined
    #hasAcertado = false
    #intentos = []
    #tipoPista = undefined

    constructor (tipoPista = this.TIPO_ES_MAYOR, inicio_rango = 1, fin_rango = 100) {
        this.#adivinanza = Math.floor(Math.random() * fin_rango) + inicio_rango
        this.#inicio_rango = inicio_rango
        this.#fin_rango = fin_rango
        this.#tipoPista = tipoPista
    }

    adivinar (n) {
        if ( this.#hasAcertado ) {
            return null
        }

        if ( this.#adivinanza === n ) {
            this.#hasAcertado = true
        }

        this.#intentos.push(n)

        return this.#hasAcertado
    }

    verIntento () {
        return this.#intentos[this.#intentos.length - 1]
    }

    verIntentos () {
        return this.#intentos
    }

    verPista () {
        if ( this.#hasAcertado ) {
            return null
        }

        switch ( this.#tipoPista ) {
            case this.TIPO_ES_MAYOR:
                return this.#esMayor()

            case this.TIPO_NIVEL_PROXIMIDAD:
                return this.#obtenerNivelProximidad()

            default:
                return null
        }
    }

    verSiHasAcertado () {
        return this.#hasAcertado
    }

    verTipoPista () {
        return this.#tipoPista
    }

    #esMayor () {
        return this.#verIntento > this.#adivinanza
    }

    #obtenerNivelProximidad () {
        return 0.5 // EN DESARROLLO…
    }
}

export default Juego
