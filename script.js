var  nomeProduto = prompt('Informe o Nome do Produto Para Revenda');

var valordoProduto = prompt('Qual o valor do Produto');

var valorDeRevenda = valordoProduto * 1.5;

document.write (`O valor da revenda do(a) ${nomeProduto} será de R$ ${valorDeRevenda}`);
document.write('<br>');

var valordoInvestimento = prompt('Quanto você pretende investir?');
var rendimento = valordoInvestimento * 1.3;
document.write (`O valor investido vai ser ${rendimento} com 30% de rentabilidade`);
document.write('<br>');

var salario1 = prompt('Qual o valor do seu salario?');
var salario15 = salario1 * 1.15;
document.write (`O salario com acrescimo de 15% vai ser R$ ${salario15}`);
document.write('<br>');

var produtoNormal = parseInt(prompt('Qual o valor do produto?'));
var produtoDesconto = produtoNormal * 0.07;
var produtofinal = produtoNormal - produtoDesconto;
document.write (`O Produto de R$ ${produtoNormal} com o desconto de 7% vai custar R$ ${produtofinal}`);
document.write('<br>');
