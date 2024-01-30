'use strict'



const convert = () => {
    const Age = document.querySelector('input').value
    const Limits = Age * 0.65
    document.querySelector('output').innerHTML = Limits.toFixed(2)
}

document.querySelector('button').addEventListener('click',convert)