'use strict'


document.querySelector('button').addEventListener('click',()=> {
    const miles = document.querySelector('input').value
    const result = miles * 1.609
    const kilometres = document.querySelector('output')
    kilometres.innerHTML = result.toFixed(2)
})