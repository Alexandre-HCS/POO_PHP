<?php
class Pessoa
{
    public $nome;
    public $idade;
    private $cpf;
    public $salario;

    public function verCPF()
    {
        return $this->cpf;
    }
}

class Aluno extends Pessoa{
    public function falar(){
        echo "Olá, me chamo {$this->nome}, tenho {$this->idade} anos, meu cpf é {$this->cpf}, eu não tenho salário";
    }
}

class Professor extends Pessoa{
    public function falar(){
        echo "Olá, me chamo {$this->nome}, tenho {$this->idade} anos, meu cpf é {$this->cpf}, eu não tenho salário";
    }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- HTML content goes here -->
</body>

</html>