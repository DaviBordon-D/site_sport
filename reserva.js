let email_modal =  document.querySelector('email_modal');
let nome_modal =  document.querySelector('nome_modal');
let servico_modal =  document.querySelector('servico_modal');
let FormaPagamento_modal =  document.querySelector('FormaPagamento_modal');
let Prazo_modal =  document.querySelector('Prazo_modal');
let Comentario_modal =  document.querySelector('Comentario_modal');

let nome = document.getElementById('name');
let email = document.getElementById('email');
let buyPass = document.getElementById('BuyPassage');
let reserve = document.getElementById('Reserve');
let rent = document.getElementById('Rent');
let radio = document.querySelector('radius');
let prazo = document.getElementById('prazoPagar');
let comment = document.getElementById('comentarioUser');
let modal = document.getElementById('modal');
document.getElementById('finalizar').addEventListener('click', function() {
    email_modal.innerHTML = `E-mail: ${email.nodeValue}` 
    nome_modal.innerHTML = `Nome: ${nome.nodeValue}` 
    servico_modal.innerHTML = `Serviços: ${buyPass.nodeValue} ${reserve.nodeValue} ${rent.nodeValue}` 
    FormaPagamento_modal.innerHTML = `Forma de Pagamento: ${radio.nodeValue}` 
    Prazo_modal.innerHTML = `Prazo do Pagamento: ${prazo.nodeValue}`;
    Comentario_modal.innerHTML = `Comentário: ${prazo.nodeValue}`;
    modal.style.display = 'flex';
});