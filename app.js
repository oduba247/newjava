let heading =document.querySelector('h1')
let inc =document.querySelector('.inc')
let res =document.querySelector('.res')
let dec =document.querySelector('.dec')

// DECREASE//////

function DECREASE() {
    heading.innerText--
    

}
dec.addEventListener('click',DECREASE)


////////////////INCREASE/////////
function INCREASE(){
        heading.innerText++
    }
inc.addEventListener('click',INCREASE)

/////RESET/////////
function RESET(){
        heading.innerText=0
    }
res.addEventListener('click',RESET)
