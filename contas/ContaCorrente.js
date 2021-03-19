import { Cliente } from '../Cliente.js'
import Conta from './Conta.js'

export default class ContaCorrente extends Conta{
	static numerocontas = 0

	constructor(agencia, cliente) {
		super(agencia, cliente)
		ContaCorrente.numerocontas++

	}

}


