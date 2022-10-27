import { box1, box2, box3, box4, box5, box6, box7, box8, box9, boxes } from "./variables.js";
import { winCondition, xWins, oWins, draw } from "./winCondition.js"



function random(max) {
    return Math.floor(Math.random() * max);
}

export function fakeAi() {

    boxes.forEach(el => el.addEventListener
        ('click', () => {
            if (event.target.classList.contains('bi-x-lg') || event.target.classList.contains('bi-circle')) {
                return
            }
            event.target.classList.add('bi-x-lg')  

            winCondition()
           
            let drawCondition = 0
            boxes.forEach((Element) => {
                if (Element.classList.contains('bi-x-lg') || Element.classList.contains('bi-circle')) {
                    drawCondition++
                }
            })
            if (drawCondition == 9) {
                draw()
                return
            }
                
            
            
            function placeRandomBox() {
                let randomBox = boxes[random(9)];
                if (randomBox.classList.contains('bi-x-lg') || randomBox.classList.contains('bi-circle')) {
                    placeRandomBox()
                    return
                } 
                 randomBox.classList.add('bi-circle');
            }
            setTimeout(placeRandomBox, 200)
            

            

        }))
    }


 

 
