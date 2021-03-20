export class Cliente {
	static numeroClientes = 0
	#nome
	#cpf
	#senha

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
	
	get senha() {
		return this.#senha
	}

	cadastrarSenha(novaSenha) {
		this.#senha = novaSenha
	}

	autenticaSenha(possivelSenha) {
		return this.senha == possivelSenha
	}
}


