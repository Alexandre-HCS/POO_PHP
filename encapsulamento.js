class Aluno{
    #nota;
    constructor(nome, idade, nota){
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
    estudar = () => console.log(`O aluno ${this.nome} de ${this.idade} anos de idade está estudando, até agora tem uma nota de ${this.#nota}`)

    verNota = () => this.#nota
}


const alex = new Aluno("Alexandre" , 17, 90)

alex.estudar();