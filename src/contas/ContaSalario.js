import { Cliente } from '../Cliente.js'
import Conta from './Conta.js'

export default class ContaSalario extends Conta{
	static numerocontas = 0

	constructor(cliente) {
		super(100, cliente)
		ContaSalario.numerocontas++

	}

	sacar(valor) {
		const taxa = 1.01
		this._sacar(valor, taxa)
	}


}


