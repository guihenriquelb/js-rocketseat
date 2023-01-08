//if e else

let temperature = 36.9

/*
if(temperature >= 37){
    console.log("Está com febre")
} else {
    console.log("Não tem febre")
}
*/

if(temperature >= 37.5){
    console.log("Febre alta")
} else if (temperature < 37.5 && temperature >= 37) {
    console.log("Febre moderada")
} else {
    console.log("Saudavel")
}


// Boas Patricas

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
    console.log("Febre alta")
} else if (mediumTemperature) {
    console.log("Febre moderada")
} else {
    console.log("Saudavel")
}