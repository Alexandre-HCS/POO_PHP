class pessoa{
    constructor(nome){
        this.nome = nome;
    }
    apresentar = () => console.log(`Olá meu nome é ${this.nome}.`)
}

class aluno extends pessoa{
    apresentar = () => console.log(`Olá meu nome é ${this.nome} e sou um aluno.`)
}

class professor extends pessoa{
    apresentar = () => console.log(`Olá meu nome é ${this.nome} e sou um professor.`)
}


const robs = new professor("Robinson")
const alex = new aluno("Alexandre")

robs.apresentar();
alex.apresentar();