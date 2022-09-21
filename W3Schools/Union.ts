// Union | (OR)

// Nós podemos usar a união de tipos quando um valor puder ser de mais de um tipo dependendo da situação:

/* o simbolo | significa que o parâmetro code por ser string ou number */
function printStatusCode(code: string | number) {
    console.log(`Meu codigo de status e ${code}.`)
};

printStatusCode(404);
printStatusCode("404");

/* no entanto existem restrições, por exemplo, se usarmos um metódo de string em uma variável que pode ser tanto string quanto number obteremos um erro, exemplo: */

// function printStatusCode2(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`);
// };
