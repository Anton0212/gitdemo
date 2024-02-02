JavaScript-tiedosto (script.js);

javascript
document.getElementById('calculate').addEventListener('click', function() {
    var age = document.getElementById('age').value;

    var lowerLimit = (220 - age) * 0.65;
    var upperLimit = (220 - age) * 0.85;

    document.getElementById('result').innerHTML = "Tavoitesykealue: " + Math.round(lowerLimit) + " - " + Math.round(upperLimit) + " lyöntiä/min";
});
