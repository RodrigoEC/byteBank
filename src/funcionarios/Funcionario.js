export default class Funcionario {
	#nome
	#salario
	#cpf
	#bonificacao
	#senha

	constructor(nome, salario, cpf) {
		this.#nome = nome
		this.#salario = salario
		this.#cpf = cpf
		this.#bonificacao = 1
	}
	
	get nome() {
		return this.#nome
	}

	get salario() {
		return this.#salario
	}

	get cpf() {
		return this.#cpf
	}
	
	get bonificacao() {
		return this.#bonificacao
	}

	get senha() {
		return this.#senha
	}
	
	set bonificacao(bonific) {
		this.#bonificacao = bonific
	}

	cadastrarSenha(senha) {
		this.#senha = senha
	}

	autenticaSenha(possivelSenha) {
		return this.senha == possivelSenha
	}
}
