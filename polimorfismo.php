<?php
class Pessoa
{
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }

    public function apresentar()
    {
        echo "Olá, eu sou {$this->nome}";
    }
}

class ALuno extends Pessoa{
    public function apresentar(){

        echo "Oi! Meu nome é {$this->nome} e eu sou um aluno </br>";
    }
}

class Professor extends Pessoa{
    public function apresentar(){

        echo "Oi! Meu nome é {$this->nome} e eu sou um professor </br>";
    }
}

$alex = new Aluno("Alexandre", 17);
$michael = new Professor("Miguel", 17);

echo $alex->apresentar();
echo $michael->apresentar();
?>