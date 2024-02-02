const input = document.querySelector('input')
const button = document.querySelector('button')

const getRandomIntNumberInRange = (min,max) =>  {
    return Math.floor(Math.random() * max) + min
}


button.addEventListener('click', ()=> {
    const randomizeNumber = getRandomIntNumberInRange(1,6)
    const guess =  Number(input.value)

    if (guess === randomizeNumber) {
        alert("Arvasit oiken, numero on " + randomizeNumber)
    } else {
        alert("Arvasit väärin, numero on " + randomizeNumber)
    }
    input.value=''
    input.focus()
})