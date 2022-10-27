import anime from '/anime.es.js'
import {fakeAi} from '/fakeai.js'
import { pvp } from '/pvp.js'

let selectedMode = 'pvp'




document.querySelector('.ai').addEventListener
    ('click', () => {
        selectedMode = 'ai'
        document.querySelector('.selected-mode').textContent = 'AI'
    })

    document.querySelector('.pvp').addEventListener
    ('click', () => {
        selectedMode = 'pvp'
        document.querySelector('.selected-mode').textContent = 'PVP'
    })



document.querySelector('.play').addEventListener
    ('click', function start() {
        if (selectedMode == 'ai') {
            fakeAi()
        }
        else if (selectedMode == 'pvp') {
            pvp()
        }

        anime({
            targets: '.box',
            opacity: 1,
            duration: 5000,
        })

      
    })
    

if (window.screen.width <= 1024) {
    document.querySelector('.popup').style.width = '100%'
}

document.querySelector('.play-again').addEventListener
    ('click', () => {
        location.reload()
})


