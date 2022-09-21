// Casting é o conceito de converter uma variável para que possamos trabalhar com ela de uma outra forma, para isso usamos a palavra as

let a: unknown = "hello";
console.log((a as string).length);

/* também é possível converter através de menor que e maior que <>, no entanto esse tipo de conversão não funciona em arquivos tsx, quando trabalhamos com react por exemplo */
let b: unknown = "hello";
console.log((<string>b).length);

/* o tipo de dado dentro da variável não é alterado quando convertemos b para string, logo, este não suporta o metódo .lenght e faz o console.log retornar undefined */
let c: unknown = 4;
console.log((c as string).length);

/* para evitar erros que o typescript possa apresentar ao realizar uma conversão primeiro convertemos para unknown e só depois para o tipo desejado, isso é chamado de force casting */
let forceCasting = "hello";

// console.log(((forceCasting as unknown) as number).lenght); 
// forceCasting continua sendo uma string, mas o metódo .lenght agora acusa um erro pois a reconhece como um number
