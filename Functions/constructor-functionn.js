/*
Function() constructor

*expressão new
*criar um novo objeto
*this word
*/ 

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
const gui = new Person("Guilherme")
const marcos = new Person("Marcos")
const joao = new Person("João")
console.log(gui)
console.log(joao)
console.log(marcos.walk())