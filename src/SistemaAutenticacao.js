export default class SistemaAutenticacao {
	static login(autenticavel, senha) {
		return autenticavel.autenticaSenha(senha)
	}
}
