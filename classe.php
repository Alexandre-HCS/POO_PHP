<?php
class Aluno
{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function estudar()
    {
        echo "{$this->nome} está estudando";
    }
}

$alex = new Aluno("Alexandre", 17);
$michael = new Aluno("Miguel", 17);

echo $alex->nome;
$michael->estudar();
?>