function randomNumberGenerator() { 
    let number = Math.round(Math.random() * 100)
    document.getElementById("numero").innerHTML = (" Tu número es: " + number)
}
