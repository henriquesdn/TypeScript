// O typescript adiciona tipos e modificadores de visibilidade às classes do javascript. Os membros de uma classe (atributos e métodos) são escritos com declaração de tipo, de maneira similar às variáveis:

class Pessoa {
    nome!: string;
};
// a exclamação indica que queremos manter o atributo mesmo ele não estando em um método construtor

const pessoa = new Pessoa();
pessoa.nome = "Henrique";

/* modificadores de acesso: public, privated e protected */
class Pessoas {
    private nome!: string;
};

const pessoas1 = new Pessoas();
// pessoas1.nome = "Henrique";

// recebemos um erro ao tentar instanciar a classe Pessoas com um nome, pois a propriedade nome não é acessivel fora da classe, isso poderia ser contornado com funções get e set dentro da classe

class Pessoinha {
    public constructor(
        private nome: string
    ) {}; 
    // assim como em java, as classes aqui possuem um metódo construtor

    public getName(): string {
        return this.nome;
    };
};

const pessoinha1 = new Pessoinha("Zé"); // instanciando classe, criando objeto
console.log(pessoinha1.getName()); // irá imprimir zé pois a propriedade nome é privada mas o metódo getName não


/* herança: implements, a palavra implements pode ser usada para definir a interface que uma classe irá seguir */
interface Forma {
    getArea: () => number;
};
  
class Retangulo implements Forma {
    public constructor(
        protected readonly altura: number,
        protected readonly largura: number
    ) {}; // altura e largura não podem ser alterados após sua definição inicial pois são readonly
  
    public getArea(): number {
        return this.altura * this.largura;
    };
};

/* herança: extends, uma classe pode estender outra por meio da palavra extends, classes só podem estender outras classes */
class Quadrado extends Retangulo {
    public constructor(
        largura: number
    ) { 
        super(largura, largura);
    };
};
// a função super() recebe os atributos da classe pai, nesse caso ambos irão receber o valor do atributo largura, instanciado através do método construtor da classe Quadrado

const quadrado = new Quadrado(5);
console.log(quadrado.getArea());

/* override, quando uma classe estende outra, ela pode substituir membros da classe pai usando o mesmo nome, é possível também explicitar isso através da palavra override */
interface Forma {
    getArea: () => number;
};
  
class Retangular implements Forma {
    public constructor(
        protected readonly altura: number,
        protected readonly largura: number
    ) {};
  
    public getArea(): number {
      return this.altura * this.largura;
    };

    public toString(): string {
      return `Retangular [altura=${this.altura}, largura=${this.largura}]`;
    };
};
  
class Quadrada extends Retangular {
    public constructor(
        largura: number
    ) {
        super(largura, largura);
    };

    // esse toString está sobrescrevendo o toString de Retangulo
    public override toString(): string { 
        return `Quadrada [largura=${this.largura}]`;
    };
};
/* usar a palavra override é opcional por default, para tornar obrigatório habilite oImplicitOverride no tsconfig */

/* abstração, classes abstratas não podem ser instanciadas, elas existem apenas para que sejam herdadas por outras classes */
abstract class Gato { // classe abstrata
    nome: string;
    cor: string;

    // metódo construtor
    constructor(
        n: string, 
        c: string
    ) { 
        this.nome = n;
        this.cor = c;
    };

    miar(): void {
        console.log("miau!");
    };
};

class Tom extends Gato{
    idade: number;

    // metódo construtor de Tom
    constructor( 
        n: string, 
        c: string, 
        i: number
    ) {
        super(n, c);
        this.idade = i;
    };
};

var g = new Tom ("Tom", "Branco", 3); // instanciando Tom

console.log(g.nome);
console.log(g.cor);
console.log(g.idade);
g.miar();