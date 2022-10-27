 //liczenie każdego rzędu i oszacowanie wygranej
import anime from "./anime.es.js";
import { box1, box2, box3, box4, box5, box6, box7, box8, box9, boxes } from "./variables.js";
export function winCondition() {

    const row1 = [box1, box2, box3]
    const row2 = [box4, box5, box6]
    const row3 = [box7, box8, box9]
    const row4 = [box1, box4, box7]
    const row5 = [box2, box5, box8]
    const row6 = [box3, box6, box9]
    const rows = [row1, row2, row3, row4, row5, row6]
    // array zawierające x i o w rzedzach
    const xs = [0, 0, 0, 0, 0, 0] 
    const os = [0, 0, 0, 0, 0, 0]
    
    let i = 0
    for (i = 0; i < rows.length; i++) {
        let k = 0
        for (k = 0; k != 3; k++) {
            if (rows[i][k].classList.contains('bi-x-lg')) {
                xs[i]++
                if (xs[i] == 3) {
                    xWins()
                    return
                }
            }
            if (rows[i][k].classList.contains('bi-circle')) {
                os[i]++
                if (os[i] == 3) {
                    oWins()
                    return
                }
            }
        }
    }
}

export function xWins() {
    displayPopup('X WINS')
    console.log('x wins')
}
export function oWins() {
    console.log('o wins')
    displayPopup('O WINS')
}
export function draw() {
    console.log('draw')
    displayPopup("IT'S A DRAW")
}

export function displayPopup(winner) {
    document.querySelector('.popup-container').classList.remove('hidden');
    anime({
        duration: 1500,
        targets: '.popup-container',
        translateY: -550,
        opacity: 1,
      });

    document.querySelector('.winner-display').textContent = winner
    
}

