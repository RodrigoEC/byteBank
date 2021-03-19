export class Cliente {
	static numeroClientes = 0
	#nome
	#cpf

	constructor(nome, cpf) {
		this.#nome = nome
		this.#cpf = cpf
		Cliente.numeroClientes++
	}

	get cpf() {
		return this.#cpf
	}

	get nome() {
		return this.#nome
	}
}


