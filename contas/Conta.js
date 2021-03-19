import { Cliente } from '../Cliente.js'

export default class Conta {
	static numerocontas = 0
	#agencia
	#saldo
	#cliente

	constructor(agencia, cliente) {
		this.#agencia = agencia
		this.#saldo = 0
		this.#cliente = cliente
		Conta.numerocontas++

	}

	set cliente(cliente) {
		if (cliente instanceof cliente) {
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
		const valorsacado = this.sacar(valor)
		conta.depositar(valorsacado)
	}
}

