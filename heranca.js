class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar = () => console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} anos de idade`)
}

class Aluno extends Pessoa{
    estudar = () => console.log(`${this.nome} está estudando.`)
}

class Professor extends Pessoa{
    darAula = () => console.log(`${this.nome} está dando aula.`)
}

const alex = new Aluno("Alexandre" , 17)
const rafa = new Aluno("Rafael" , 17)
const raul = new Professor("Raul" , 28)
const nadja = new Professor("Nadja" , 37)

alex.apresentar()
alex.estudar()
rafa.apresentar()
rafa.estudar()
raul.apresentar()
raul.darAula()
nadja.apresentar()
nadja.darAula()