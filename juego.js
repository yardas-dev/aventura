class Juego {
    AFIRMACIÓN = 'afirmación'
    COMPARACIÓN = 'comparación'
    NIVEL_PROXIMIDAD = 'nivel de proximidad (decimal)'

    #adivinanza = undefined
    #hasAcertado = false
    #intentos = 0
    #tipoPista = undefined

    constructor (tipoResultado = this.COMPARACIÓN, n = 1, m = 100) {
        this.#adivinanza = Math.floor(Math.random() * n) + m
        this.#tipoResultado = tipoResultado
    }

    adivinar (n) {
        if ( this.#hasAcertado ) {
            return null
        }

        if ( this.#adivinanza === n ) {
            this.#hasAcertado = true
        }

        let resultado = {
            hasAcertado: this.#hasAcertado,
            tipoResultado: this.#tipoResultado,
            valor: undefined
        }

        if ( this.tipoResultado === this.AFIRMACIÓN ) {
            resultado.valor = this.#hasAcertado
        } else if ( this.tipoResultado === this.COMPARACIÓN ) {
            resultado.valor = this.#comparar(n)
        } else if ( this.tipoResultado === this.NIVEL_PROXIMIDAD ) {
            resultado.valor = this.#obtenerNivelProximidad(n)
        }

        this.#intentos++

        return resultado
    }
}

export default Juego
