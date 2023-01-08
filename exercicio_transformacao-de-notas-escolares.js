/* Transformar notas escolares

Criar um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

function transformScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0
    
    let result

    if (scoreA){
        result = 'A'
    } else if(scoreB){
        result = 'B'
    } else if(scoreC){
        result = 'C'
    } else if(scoreD){
        result = 'D'
    } else if(scoreF){
        result = 'F'
    } else {
        result = 'Nota Inválida'
    }

    return result
}

let score = 0
console.log(transformScore(score))