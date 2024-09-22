let opcao = 'nenhum';

let valor_cafe = 5;
let valor_cha = 4;
let valor_leite = 7;

switch (opcao) {
    case 'Café':
        console.log(`Ótima escolha! O valor do ${opcao} é de R$:${valor_cafe.toFixed(2)}`);
        break;
    case 'Chá':
        console.log(`Bela opção! Um ${opcao} nesse clima de hoje saí por apenas R$:${valor_cha.toFixed(2)}`);
        break;
    case 'Leite':
        console.log(`Boa escolha! O valor do ${opcao} fica apenas R$:${valor_leite.toFixed(2)} (obs:cuidado com a lactose)`);
        break;
    default:
        console.log('Opa! Percebemos que não escolheu nenhuma das opções disponíveis. Por favor, escolha entre as opções "Café, Leite ou Chá".');
        break;
}