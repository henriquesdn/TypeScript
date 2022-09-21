// Aliases e Interfaces - Apelidos e Interfaces

// O typescript nos possibilita criar nossos próprios tipos personalizados atribuindo um “apelido” para tipos já existentes na linguagem, isso pode ajudar a deixar o código mais inteligível, exemplos:

/* atribuindo apelidos para os tipos */
type marca = string;
type modelo = string;
type ano = number;
type automovel = {
    marcaDoAutomovel: marca,
    modeloDoAutomovel: modelo,
    anoDoAutomovel: ano
};

/* atribuindo tipos às variáveis através dos apelidos */
var marcaDoCarro: marca = "Crossfox";
var modeloDoCarro: modelo = "Estourado";
var anoDoCarro: ano = 2014;
var automovel1: automovel = {
    marcaDoAutomovel: "Gol",
    modeloDoAutomovel: "Quadrado",
    anoDoAutomovel: 2010
};

/* uma interface se assemelha a um apelido, mas esta se aplica apenas para objetos */
interface retangulo {
    altura: number,
    largura: number
};

const retangulo1: retangulo = {
    altura: 10,
    largura: 20
};

/* extenção, extends é uma função de herança de propriedades para interfaces */
interface retanguloColorido extends retangulo {
    cor: string
};

const retanguloColorido = {
    altura: 50,
    largura: 30,
    cor: "Vermelho"
};
