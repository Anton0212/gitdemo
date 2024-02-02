const input_height = document.querySelector('#height')
const input_weight = document.querySelector('#weight')
const result_output = document.querySelector('output')
const button = document.querySelector('button')

button.addEventListener('click',() => {
    const height = Number(input_height.value)
    const weight = Number(input_weight.value)
    if (height >= 1 && height <=2.5){
    if (weight > 10 && weight <300) {
    const result = weight / (height * height)
    result_output.innerHTML = result.toFixed(1)
    } else {
        alert("Painon pitää olla välillä 10-300")
    }
} else {
    alert("Pituuden pitää olla välillä 1-2.5")
}
})