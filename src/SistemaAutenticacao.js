export default class SistemaAutenticacao {
	static login(autenticavel, senha) {
		if (!SistemaAutenticacao.ehAutenticavel(autenticavel)) {
			return false
		}
		return autenticavel.autenticaSenha(senha)
	}

	static ehAutenticavel(autenticavel) {
		return 'autenticaSenha' in autenticavel &&
			autenticavel.autenticaSenha instanceof Function
	}
}
