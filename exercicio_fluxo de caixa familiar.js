/* Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
* receitas: []
* despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo


*/ 

let family = {
    incomes: [100, 200, 300],
    expenses: [50, 100, 150]
}

function sum(array){
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculeBalance(){
    const calculeIncomes = sum(family.incomes)
    const calculeExpenses = sum(family.expenses)

    const total = calculeIncomes - calculeExpenses

    const itsOk = total >= 0

    let balanceText = 'negativo'

    if (itsOk) {
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2).replace('.', ',')}`)
}

calculeBalance()