
class Funcionario {
    #cpf;

    constructor(nome, idade, cpf, cargo, atividade) {
      this.nome = nome;
      this.idade = idade;
      this.#cpf = cpf;
      this.cargo = cargo;
      this.atividade = atividade;
    }

    verCpf(visivel) {
      return visivel ? this.#cpf : "***.***.***-**";
    }

    get cpfReal() {
      return this.#cpf;
    }
  }

  class Medico extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Médico", "Atende pacientes em consultório.");
    }
  }

  class Enfermeiro extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Enfermeiro", "Presta cuidados diretos aos pacientes.");
    }
  }

  class Recepcionista extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Recepcionista", "Atende as ligações e marca consultas.");
    }
  }

  class Cirurgiao extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Cirurgião", "Realiza cirurgias para salvar vidas.");
    }
  }

  class Socorrista extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Socorrista", "Presta primeiros socorros em emergências.");
    }
  }

  class Limpeza extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Funcionário da Limpeza", "Cuida da higiene do ambiente hospitalar.");
    }
  }

  class Diretor extends Funcionario {
    constructor(nome, idade, cpf) {
      super(nome, idade, cpf, "Diretor", "Coordena todas as operações da clínica.");
    }
  }

  const funcionarios = [
    new Medico("Luciano", 40, "123.321.456-11"),
    new Enfermeiro("Juliana", 30, "987.654.432-22"),
    new Recepcionista("Carla", 25, "654.321.987-33"),
    new Cirurgiao("Renato", 45, "789.123.654-44"),
    new Socorrista("Paula", 33, "321.654.987-55"),
    new Limpeza("Luiz", 50, "852.951.753-66"),
    new Diretor("Ana", 55, "741.852.963-77"),
  ];

  let cpfVisivel = false;

  function atualizarTabela() {
    const tableBody = document.querySelector("#funcionariosTable tbody");
    tableBody.innerHTML = "";

    funcionarios.forEach(func => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${func.cargo}</td>
        <td>${func.nome}</td>
        <td>${func.idade} anos</td>
        <td>${func.verCpf(cpfVisivel)}</td>
        <td>${func.atividade}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  function alternarVisibilidadeCpf() {
    cpfVisivel = !cpfVisivel;
    atualizarTabela();
  }

  atualizarTabela();