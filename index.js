import { Cliente } from "./Cliente.js"
import ContaCorrente from "./contas/ContaCorrente.js"
import ContaPoupanca from "./contas/ContaPoupanca.js"

const cliente01 = new Cliente("Rodrigo", "07345161420")
console.log(cliente01.nome)

const conta = new ContaCorrente(1001, cliente01)
conta.depositar(500)
console.log(conta.saldo)

conta.sacar(60)
console.log(conta.saldo)
