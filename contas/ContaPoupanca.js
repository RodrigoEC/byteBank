import { Cliente } from '../Cliente.js'
import Conta from './Conta.js'

export default class ContaPoupanca extends Conta {
	static numeroContas = 0

	constructor(saldo, agencia, cliente) {
		super(agencia, cliente)
		this.saldo = saldo
		ContaPoupanca.numerocontas++

	}

}


