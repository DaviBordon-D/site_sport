class Funcionarios{
   constructor(nome, idade, cargo){
       this.nome = nome;
       this.idade = idade;
       this.cargo = cargo;
   }

   seApresentar(){
       console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade, e atuo como ${this.cargo} nesta empresa.`);
       console.log('\n');
   }

   trabalhar(fala, trabalhar){
       if (trabalhar) {
           console.log(fala);
       } else {
           console.log('Até voltaria a trabalhar agora, mas ainda não deu meu horário.');
       }
       console.log('\n');
       return trabalhar;
   }
}

class Gerente extends Funcionarios{
   constructor(nome, idade, cargo, departamento) {
       super(nome,idade,cargo);
       this.departamento = departamento;
   }

   gerenciar(meta, vendaAtual){
       let metaMensal = meta;
       let vendasAtual = vendaAtual;

       if (vendasAtual < metaMensal) {
           let grupoAprimorarVendas = [
               'Claudio',
               'Diana',
               'Clodomildo'
           ]

           let time = "As pessoas escolhidas para o grupo que aprimorará as vendas desse mês são: \n";
           let i = 0;
           for (i = 0; i < grupoAprimorarVendas.length; i++) {
               time += grupoAprimorarVendas[i] + '\n';
           }

           console.log(time);
       } else {
           console.log('Não será necessário gerenciar um time específico para atingir a meta mensal, pois já conseguimos!');
       }
       console.log('\n');
   }
}

class Desenvolvedor extends Funcionarios{
   constructor(nome, idade, cargo, linguagem) {
       super(nome,idade,cargo);
       this.linguagem = linguagem;
   }

   programar(opcao, descricao, numeros){
        if (opcao === 'Site') {
            console.log('Criando site...');
            setTimeout(() => {
                console.log(`${opcao} de ${descricao} criado.`);
            }, 2000);
        } else if (opcao === 'calculo') {
            console.log(`Criando cálculo de números...`);
            if (numeros.length < 2) {
                console.log(`Parâmetros passados para a programação de forma incorreta, por favor, passe os parâmetros das seguinte forma:\n Parâmetros:(opcao, null, [num1, num2])`);
            } else {
                setTimeout(() => {
                    console.log(`Cálculo de números criado.`);
                    let soma = numeros[0] + numeros[1];
                    console.log(`Aqui está o cálculo da soma de dois números aleatórios: ${soma}.`);
                }, 2000);
            }
        } else {
            console.log('Oh ou! No momento não podemos desenvolver isso.');
        }
   }
}

const verificaNumero = new RegExp('[0-9]+');
function validateInformation(event){
    try {

        let nameDev = document.getElementById('nameDev').value;
        let idadeDev = Number(document.getElementById('idadeDev').value);
        let cargoDev = document.getElementById('cargoDev').value;
        let linguagem = document.getElementById('linguagem').value;

        let nameGer = document.getElementById('nameGer').value;
        let idadeGer = Number(document.getElementById('idadeGer').value);
        let cargoGer = document.getElementById('cargoGer').value;
        let departamento = document.getElementById('departamento').value;

        if (idadeDev < 17 || idadeDev > 70) {
            throw new Error('Idade do Desenvolvedor inválida, nesta empresa não possuímos funcionarios com esta idade');
        }

        if (idadeGer < 17 || idadeGer > 70) {
            throw new Error('Idade do Gerente inválida, nesta empresa não possuímos funcionarios com esta idade');
        }

        if (!cargoGer.includes('Gerente')) {
            throw new Error('O cargo de Gerente deve conter pelo menos a palavra "Gerente", sendo a primeira letra maiúscula.');
        }

        if (verificaNumero.test(nameDev)) {
            throw new Error('Não pode possuir números no nome do Desenvolvedor!');
        }

        if (verificaNumero.test(nameGer)) {
            throw new Error('Não pode possuir números no nome do Gerente!');
        }

        let gerente = new Gerente(nameGer, idadeGer, cargoGer, departamento);
        gerente.seApresentar();

        let trabalhar_gerente = gerente.trabalhar(`Com sua licença, preciso voltar ao trabalho agora.\nO departamento de ${gerente.departamento} está bem agitado hoje!`, true);

        if (trabalhar_gerente) {
            gerente.gerenciar(4500, 3550);
        }


        let dev = new Desenvolvedor(nameDev, idadeDev, cargoDev, linguagem);
        dev.seApresentar();

        let trabalhar_dev = dev.trabalhar(`Foi muito bom te conhecer! Mas agora preciso voltar ao trabalho! Estou desenolvendo um programa em ${dev.linguagem}.`, true);

        if (trabalhar_dev) {
            dev.programar('calculo', null, [1, 2]);
        }
    } catch (error) {
        console.log('Ocorreu um erro: ', error.message);
        alert('Ocorreu um erro: ' + error.message);
    }
}
