class Funcionarios{
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    };

    seApresentar(){
        return console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.cargo} aqui na empresa`);
    }

    trabalhar(){
        
    }
}

class Gerente extends Funcionarios{
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo)
        this.departamento = departamento;
    };

    gerenciar(){
        return console.log()
    }
}

class Desenvolvedor extends Funcionarios{
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    };

    programar(){
        return console.log();
    }
}