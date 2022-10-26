let heading =document.querySelector('h1')
let inc =document.querySelector('.inc')
let res =document.querySelector('.res')
let dec =document.querySelector('.dec')

// DECREASE//////

function DECREASE() {
    heading.innerText--
    const body =document.body.style
    body.backgroundColor='orange'
    

}
dec.addEventListener('click',DECREASE)


////////////////INCREASE/////////
function INCREASE(){
        heading.innerText++
        const body =document.body.style
    body.backgroundColor='yellow'
    }
inc.addEventListener('click',INCREASE)

/////RESET/////////
function RESET(){
        heading.innerText=0
        const body =document.body.style
    body.backgroundColor='purple'
    }
res.addEventListener('click',RESET)
