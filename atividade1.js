var num1,num2, nome, RA, res;

num1 = parseInt(prompt("Digite um número"));
num2 = parseInt(prompt("Digite outro número"));

nome = "Mateus Vinicius de Lana Silva";
RA = 420104647;
document.write("nome: " + nome + "<br>RA: " + RA + "<hr>");
document.write("Números digitados: " + num1 + " e " + num2 + "<hr>");

res = (num1==num2);
document.write("Os números são iguais? " + res + "<br>");

res = (num1===num2);
document.write("Os números são idênticos? " + res + "<br>");

res = (num1!=num2);
document.write("Os números não são iguais? " + res + "<br>");

res = (num1!==num2);
document.write("Os números não são idênticos? " + res + "<br>");

res = (num1>num2);
document.write(num1 + " é maior que " + num2 + "? " + res + "<br>");

res = (num1<num2);
document.write(num1 + " é menor que " + num2 + "? " + res + "<br>");

res = (num1>=num2);
document.write(num1 + " é maior ou igual a " + num2 + "? " + res + "<br>");

res = (num1<=num2);
document.write(num1 + " é menor ou igual a " + num2 + "? " + res + "<br>");