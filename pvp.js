import { box1, box2, box3, box4, box5, box6, box7, box8, box9, boxes } from "./variables.js";
import { winCondition, xWins, oWins, draw } from "./windCondition.js"

export function pvp (){

 let xPlaced = false
    
boxes.forEach(el => el.addEventListener
    ('click', () => {
        if (event.target.classList.contains('bi-x-lg') || event.target.classList.contains('bi-circle')) {
            return
        }
        if (xPlaced == false) {
            event.target.classList.add('bi-x-lg')
            xPlaced = true
        }
        else if (xPlaced == true) {
            event.target.classList.add('bi-circle')
            xPlaced = false
        }
        winCondition()
      
        let drawCondition = 0
       
        boxes.forEach((Element) => {
            if (Element.classList.contains('bi-x-lg') || Element.classList.contains('bi-circle')) { 
                drawCondition++
            }
        })
        if (drawCondition == 9){
            draw()
        }

        
    }))
}
    


