// throw

function sayMyName(name = ''){
    if (name == '') {
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

//try e catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após o erro')