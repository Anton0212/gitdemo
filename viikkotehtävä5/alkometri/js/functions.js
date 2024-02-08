function calculatePromille() {
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    const beer = parseFloat(document.getElementById('beer').value);
    const hours = parseFloat(document.getElementById('hours').value);
  
    const liters = beer * 0.33;
    let grams = liters * 8 * 4.5;
    const burnRate = weight / 10;
    grams -= burnRate * hours;
  
    if (grams < 0) {
      grams = 0;
    }
  
    let result;
    if (gender === 'male') {
      result = grams / (weight * 0.7);
    } else {
      result = grams / (weight * 0.6);
    }
  
    document.getElementById('result').innerText = 'Promilles: ' + result.toFixed(2);
  }
  