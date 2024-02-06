function laskeTavoitesyke() {
    var ika = parseInt(document.getElementById('ika').value);

    if (isNaN(ika) || ika <= 0) {
        document.getElementById('tulos').innerHTML = "Syötä kelvollinen ikä.";
        return;
    }

    var alaraja = Math.round((220 - ika) * 0.65);
    var ylaraja = Math.round((220 - ika) * 0.85);

    document.getElementById('tulos').innerHTML = "Tavoitesykealue: " + alaraja + " - " + ylaraja + " lyöntiä/min";
}

