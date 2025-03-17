class pessoa{
    constructor(nome){
        if(this.constructor === pessoa){
            throw new Error("Pelo amor de deus, não faça isso, já tem uma pessoa, já tem uma classe pessoa, não faça isso");
    }
    this.nome = nome;
}
}

class aluno extends pessoa{
}

const alex = new aluno("Alexandre")

console.log(alex.nome)