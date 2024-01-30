'use strict'



const convert = () => {
    const miles = document.querySelector('input').value
    const kilometres = miles * 1.609
    document.querySelector('output').innerHTML = kilometres.toFixed(2)
}

document.querySelector('button').addEventListener('click',convert)
