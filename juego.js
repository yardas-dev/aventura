TIPO_ES_MAYOR = 'es mayor (booleano)'
TIPO_NIVEL_PROXIMIDAD = 'nivel de proximidad (decimal)'
TIPOS_VÁLIDOS = [TIPO_ES_MAYOR, TIPO_NIVEL_PROXIMIDAD]
ERROR_TIPO_INVÁLIDO = 'Tipo de pista inválido'

class Juego {

    #adivinanza = undefined
    #inicio_rango = undefined
    #fin_rango = undefined
    #hasAcertado = false
    #intentos = []
    #tipoPista = undefined

    constructor (tipoPista = TIPO_ES_MAYOR, inicio_rango = 1, fin_rango = 100) {
        if ( ! TIPOS_VÁLIDOS.includes(tipoPista) ) {
            throw ERROR_TIPO_INVÁLIDO
        }

        this.#adivinanza = Math.floor(Math.random() * fin_rango) + inicio_rango
        this.#inicio_rango = inicio_rango
        this.#fin_rango = fin_rango
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
        }

        switch ( this.#tipoPista ) {
            case this.TIPO_ES_MAYOR:
                valor = this.#esMayor()

            case this.TIPO_NIVEL_PROXIMIDAD:
                valor = this.#obtenerNivelProximidad()

            default:
                valor = null
        }

        return {
            intento: this.#intento,
            tipo: this.#tipoPista,
            valor
        }
    }

    get #intento () {
        return this.#intentos[this.#intentos.length - 1]
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

    #esMayor () {
        return this.#verIntento > this.#adivinanza
    }

    #obtenerNivelProximidad () {
        return 0.5 // EN DESARROLLO…
    }
}

export default Juego
