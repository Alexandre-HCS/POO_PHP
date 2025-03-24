<?php
abstract class Pessoa
{
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }
}

class Aluno extends Pessoa{

}

$alex = new Aluno("Alexandre");
echo $alex->nome . " é ele";
?>