// Assim como o javascript, o typescript possui três tipos primitivos: boolean, number e string. . Mas diferentemente do javascript, no typescrit nós podemos trabalhar com tipagem estática, ou seja, declarando o tipo das variáveis explicitamente, observe a diferença:

/* tipagem dinâmica */
var nome = "Henrique";

/* tipagem estática */
var nome: string = "Henrique";


// Array
/* diferentes formas de declaração */
var clientes: string[] = ["Iran", "Alan", "Henrique"];
var clientes2: Array<string> = ["Iran", "Alan", "Henrique"];

/* readonly impede que o array seja alterado com um .push por exemplo */
var clientes3: readonly string[] = ["Iran", "Alan", "Henrique"];


// Tuple
var exemplo: [boolean, string, string, number] = [true, "texto", "tupla", 5];

/* tuplas tem tipos definidos apenas para seus índices iniciais, os demais não */
var exemplo2: [boolean, string, string, number] = [true, "texto", "tupla", 5];
exemplo2.push("Novo item da tupla");

/* tuplas nomeadas */
var coordenadas: [x: number, y: number] = [4, 1];

/* tuplas desestruturadas */
var coordenadas2: [number, number] = [2, 5];
var [x, y] = coordenadas2;


// Object
var carro: {marca: string, modelo: string, ano: number} = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

/* objeto com propriedade opcional, ? */
var carro2: {marca: string, modelo: string, ano?: number} = {
    marca: "Celta",
    modelo: "Rebaixado",
};

/* índice reservado */
var carro3: {[index: string] : string} = {
};

carro3.marca = "Ferrari"; /* adiciona a propriedade "marca" ao objeto carro3 */


// Enum
/* por padrão uma variável enum é numeric e seu primeiro valor é 0, incrementando o seguintes de 1 em 1 */
enum diasDaSemana {
    segunda, // = 0
    terca, // = 1
    quarta, // = 2
    quinta, // = 3
    sexta, // = 4
    sabado, // = 5
    domingo // = 6
};

/* caso especifiquemos o primeiro valor, os demais serão incrementados de 1 em 1*/
enum diasDaSemana2 {
    segunda = 1,
    terca, // = 2
    quarta, // = 3
    quinta, // = 4
    sexta, // = 5
    sabado, // = 6
    domingo // = 7
};

/* podemos atribuir valores especificos para da uma das constantes também */
enum celulares {
    pocket = 500,
    motoG = 1800,
    iPhone = 3799
};

/* uma enum de string é mais comum do que uma enum numérica, devido a sua legibilidade e intenção */
enum direcoesCardinais {
    norte = "Norte",
    leste = "Leste",
    sul = "Sul",
    oeste = "Oeste"
};
