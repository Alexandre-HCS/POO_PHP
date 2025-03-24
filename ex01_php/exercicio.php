<?php
class Pessoa
{
    public $nome;
    public $idade;
    private $cpf;
    public $salario;

    public function __construct($nome, $idade, $cpf, $salario)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->cpf = $cpf;
        $this->salario = $salario;
    }

    public function verCPF()
    {
        return $this->cpf;
    }
}

class Aluno extends Pessoa{
    public function falar(){
        echo "Olá, me chamo {$this->nome}, tenho {$this->idade} anos, meu cpf é {$this->verCPF()}, eu não tenho salário </br>";
    }
}

class Professor extends Pessoa{
    public function falar(){
        echo "Olá, me chamo {$this->nome}, tenho {$this->idade} anos, meu cpf é {$this->verCPF()}, sou um/a professor/a com um salário de {$this->salario} </br>";
    }
}

class Diretor extends Pessoa{
    public function falar(){
        echo "Olá, me chamo {$this->nome}, tenho {$this->idade} anos, meu cpf é {$this->verCPF()}, sou O diretor com um salário de {$this->salario} </br>";
    }
}

class Funcionario extends Pessoa{
    public function falar(){
        echo "Olá, me chamo {$this->nome}, tenho {$this->idade} anos, meu cpf é {$this->verCPF()}, sou um/a funcionario/a com um salário de {$this->salario} </br>";
    }
}

$aluno = new Aluno("Zé Ninguém", 16, "111.111.111-11", 0);
$professor = new Professor("Zé Todo", 16, "111.111.111-12", 5000);
$diretor = new Diretor("Zé Importante", 16, "111.111.111-13", 12000);
$funcionario = new Funcionario("Zé da Limpeza", 16, "111.111.111-14", 2000);

$aluno->falar();
$professor->falar();
$diretor->falar();
$funcionario->falar();


?>
