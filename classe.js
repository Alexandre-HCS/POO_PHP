class Aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    estudar = () => console.log(`${this.nome} está estudando.`)
}

const rafael1 = new Aluno("Rafael" , 17)

console.log(rafael1.nome, rafael1.idade);

rafael.estudar();

class aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    feliz = () => console.log(`${this.nome} de ${this.idade} anos está muito feliz.`)
}

const yago = new aluno("Yago" , 17)
const rafael = new aluno("Rafael" , 17)
const alex = new aluno("Alexandre" , 17)
const gustavo = new aluno("Gustavo" , 19)

console.log(yago.nome, yago.idade);

yago.feliz();