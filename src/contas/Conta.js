import { Cliente } from '../Cliente.js'

export default class Conta {
	static numerocontas = 0
	#agencia
	#saldo
	#cliente

	constructor(agencia, cliente) {
		if (this.constructor == Conta) {
			throw new Error("Voce não pode instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata")
		}

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

	// Método abstrato
	sacar(valor) {
		throw new Error("O método Sacar da conta é abstrato")
	}
	
	_sacar(valor, taxa) {
		const valorSacado = taxa * valor

		if (this.saldo < valorSacado) return
		this.saldo -= valorSacado
	}

	transferir(valor, conta) {
		const valorsacado = this.sacar(valor)
		conta.depositar(valorsacado)
	}
}


