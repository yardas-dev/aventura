import Phaser from 'phaser'
import scene from './scene.js'

const WIDTH = 1920
const HEIGHT = 1080

class Juego {
    constructor () {
        this.config = {
            type: Phaser.AUTO,
            width: WIDTH,
            height: HEIGHT,
            scene,
        }

        this.juego = new Phaser.game(this.config)

        this.#reiniciar()
    }

    comprobar (n) {
        if ( this.adivinanza === n ) {
            confirm('¡Asertaste a peseta! ¿Quieres volver a jugar?')
                ? this.#reiniciar()
                : undefined
        } else if ( this.#estáCerca(n) ) {
            console.log('¡Caliente!')
        } else {
            console.log('Frío…')
        }
    }

    #estáCerca (n) {
        if ( this.adivinanza < n && this.adivinanza + 10 >= n ) {
            return true
        } else if ( this.adivinanza > n && this.adivinanza - 10 <= n ) {
            return true
        }

        return false
    }

    #reiniciar () {
        this.adivinanza = Math.floor(Math.random() * 100) + 1
        console.log('Adivina el número en que pienso, del 1 al 100. ¡Vamos!')
    }
}

export default Juego
