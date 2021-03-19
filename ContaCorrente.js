import { Cliente } from './Cliente.js'

export default class ContaCorrente {
	static numeroContas = 0
	#agencia
	#saldo = 0
	#cliente

	constructor(saldo, agencia, cliente) {
		this.#agencia = agencia;
		this.#saldo = saldo;
		this.#cliente = cliente;
		ContaCorrente.numeroContas++

	}

	set cliente(cliente) {
		if (cliente instanceof Cliente) {
			this.#cliente = cliente
		}

	}

	set saldo(valor) {
		this.#saldo = valor
	}
	
	get cliente() {
		return this.#cliente
	}
	
	get saldo() { return this.#saldo }

	get agencia() { return this.#agencia }

	depositar(valor) {
		if (valor <= 0) return
		this.#saldo += valor
	}

	sacar(valor) {
		if (this.#saldo < valor) return

		this.#saldo -= valor
		return valor
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor)
		conta.depositar(valorSacado)
	}
}


