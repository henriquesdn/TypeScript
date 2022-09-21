// O typescript possui uma sintaxe diferenciada em suas funções também, esta demanda especificação de tipos dos parâmetros e do retorno:

/* o tipo void pode ser utilizado para indicar que uma função não retorna nenhum valor */
function warning(): void {
    console.log("Esta é uma função do tipo void");
};

/* tipos de parâmetros, caso não sejam especificados serão do tipo any */
function multiplicar(a: number, b: number) {
    return a * b;
};

/* parâmetros opcionais */
function adicionar(a: number, b: number, c?: number) {
    return a + b + (c || 0);
};

/* parâmetros padrão, recebem um valor padrão na sua declaração */
function potencia(valor: number, expoente: number = 10) {
    return valor ** expoente;
};

/* rest parameters, número indefinido de parâmetros */ 
function adicionar2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((previous, current) => previous + current, 0);
};

console.log(adicionar2(2, 3, 4, 4, 7));

/* apelido para tipo de função, esses tipos são escritos de maneiras similares a uma arrow function */
type negativar = (valor: number) => number;
// uma função do tipo "negativar" recebe um number como parãmetro e retorna um number

const funcaoDeNegativar: negativar = (valor) => valor * -1;

console.log(funcaoDeNegativar(5));
