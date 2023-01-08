/* Celsius em fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/ 

// transform('50F)

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F PARA C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let deegreSign = 'C'


    // fluxo alternativo C PARA F
    if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        deegreSign = 'C'
    }

    return formula(updateDegree) + deegreSign
}

try {
    console.log(transformDegree('10C'))
   
} catch (error) {
    console.log(error.message)
}