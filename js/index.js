const telaResultado = document.querySelector("#tela-resultado");
const botaoCalc = document.querySelectorAll("#botao-calc");
const limparTudo = document.querySelector("#limpar-tudo");
const deletar = document.querySelector("#deletar");
const igual = document.querySelector("#igual");

botaoCalc.forEach(botao => {
	botao.addEventListener("click", () => {
		const valorClicado = botao.innerHTML;

		inserirValorNaTela(valorClicado);
	});
});

function inserirValorNaTela(botao) {
	let ultimoElementoClicado = telaResultado.innerHTML[telaResultado.innerHTML.length - 1];

	if (
		ultimoElementoClicado &&
		!Number(ultimoElementoClicado) &&
		!Number(botao) &&
		ultimoElementoClicado != 0 &&
		botao != 0
	) {
		telaResultado.innerHTML = telaResultado.innerHTML.toString().slice(0, -1);
	}
	if (telaResultado.innerHTML == 0 && !Number(botao)) {
		return;
	}
	if (telaResultado.innerHTML.includes(".") && botao === ".") {
		return;
	}

	telaResultado.innerHTML += botao;
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
