const textoOperadorAnterior = document.querySelector("#operador-anterior");
const textoOperadorAtual = document.querySelector("#operador-atual");
const numero = document.querySelectorAll("#numero");
const operador = document.querySelectorAll("#operador");
const limparTudo = document.querySelector("#limpar-tudo");
const deletar = document.querySelector("#deletar");
const igual = document.querySelector("#igual");

class Calculadora {
	constructor(textoOperadorAnterior, textoOperadorAtual) {
		this.textoOperadorAnterior = textoOperadorAnterior;
		this.textoOperadorAtual = textoOperadorAtual;
		this.limpar();
	}
	deletar() {
		this.operadorAtual = this.operadorAtual.toString().slice(0, -1);
	}

	calcular() {
		let resultado;
		const _operadorAnterior = parseFloat(this.operadorAnterior);
		const _operadorAtual = parseFloat(this.operadorAtual);
		if (isNaN(_operadorAnterior) || isNaN(_operadorAtual)) return;

		switch (this.operador) {
			case "+":
				resultado = _operadorAnterior + _operadorAtual;
				break;
			case "-":
				resultado = _operadorAnterior - _operadorAtual;
				break;
			case "*":
				resultado = _operadorAnterior * _operadorAtual;
				break;
			case "/":
				resultado = _operadorAnterior / _operadorAtual;
				break;
			default:
				return;
		}
		this.operadorAtual = resultado;
		this.operador = undefined;
		this.operadorAnterior = "";
	}

	receberOperador(operador) {
		if (this.operadorAtual === "") return;
		if (this.operadorAnterior != "") this.calcular();
		this.operador = operador;
		this.operadorAnterior = this.operadorAtual;
		this.operadorAtual = "";
	}

	receberNumero(numero) {
		if (this.operadorAtual.includes(".") && numero === ".") return;
		this.operadorAtual = `${this.operadorAtual}${numero.toString()}`;
	}
	limpar() {
		this.operadorAnterior = "";
		this.operadorAtual = "";
		this.operador = undefined;
	}

	atualizarDisplay() {
		this.textoOperadorAnterior.innerText = `${this.operadorAnterior} ${this.operador || ""}`;
		this.textoOperadorAtual.innerText = this.operadorAtual;
	}
}

const calculadora = new Calculadora(textoOperadorAnterior, textoOperadorAtual);

for (const numeros of numero) {
	numeros.addEventListener("click", () => {
		calculadora.receberNumero(numeros.innerText);
		calculadora.atualizarDisplay();
	});
}
for (const operadores of operador) {
	operadores.addEventListener("click", () => {
		calculadora.receberOperador(operadores.innerText);
		calculadora.atualizarDisplay();
	});
}

limparTudo.addEventListener("click", () => {
	calculadora.limpar();
	calculadora.atualizarDisplay();
});
igual.addEventListener("click", () => {
	calculadora.calcular();
	calculadora.atualizarDisplay();
});
deletar.addEventListener("click", () => {
	calculadora.deletar();
	calculadora.atualizarDisplay();
});
