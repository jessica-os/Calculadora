const telaResultado = document.querySelector("#tela-resultado");
const botaoNumero = document.querySelectorAll("#numero");
const operacao = document.querySelectorAll("#operador");
const limparTudo = document.querySelector("#limpar-tudo");
const deletar = document.querySelector("#deletar");
const igual = document.querySelector("#igual");

botaoNumero.forEach(numero => {
	numero.addEventListener("click", () => {
		const valorClicado = numero.innerHTML;

		inserirNumeroNaTela(valorClicado);
	});
});
operacao.forEach(operador => {
	operador.addEventListener("click", () => {
		const operadorClicado = operador.innerHTML;

		inserirOperadorNaTela(operadorClicado);
	});
});

function inserirNumeroNaTela(numero) {
	if (telaResultado.innerHTML.includes(".") && numero === ".") {
		return;
	}
	telaResultado.innerHTML += numero;
}

function inserirOperadorNaTela(operador) {
	if (telaResultado.innerHTML == 0 && !Number(operador)) {
		return;
	}
	telaResultado.innerHTML += operador;
}
function limpar() {
	limparTudo.addEventListener("click", () => {
		telaResultado.innerHTML = "";
	});
}
limpar();

function deletarTudo() {
	deletar.addEventListener("click", () => {
		telaResultado.innerHTML = telaResultado.innerHTML.toString().slice(0, -1);
	});
}
deletarTudo();
function executarCalculo() {
	igual.addEventListener("click", () => {
		if (telaResultado.innerHTML === "") {
			return;
		}
		telaResultado.innerHTML = eval(telaResultado.innerHTML);
	});
}
executarCalculo();
