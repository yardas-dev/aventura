class Juego {
    pistas = {
        VICTORIA: 0,
        COMPARACIÓN: 1,
        NIVEL_PROXIMIDAD: 2
    }
    pista = undefined
    intentos = 0
    #adivinanza = undefined

    constructor (pista = this.pistas.COMPARACIÓN, n = 1, m = 100) {
        this.pista = pista
        this.#adivinanza = Math.floor(Math.random() * n) + m
    }

    adivinar (n) {
        this.intentos++

        if ( this.adivinanza === n ) {
            return {
                pista: this.pistas.VICTORIA,
                resultado: true
            }
        } else if ( this.pista === this.pistas.COMPARACIÓN ) {
            return {
                pista: this.pistas.COMPARACIÓN,
                resultado: this.#esMayor(n)
            }
        } else if ( this.pista === this.pistas.NIVEL_PROXIMIDAD ) {
            return {
                pista: this.pistas.NIVEL_PROXIMIDAD,
                resultado: this.#obtenerNivelProximidad(n)
            }
        }
    }
}

export default Juego
