import { Cliente } from "./Cliente.js"
import ContaCorrente from "./ContaCorrente.js"
import ContaPoupanca from "./ContaPoupanca.js"

const cliente01 = new Cliente("Rodrigo", "07345161420")
console.log(cliente01.nome)

const conta = new ContaPoupanca(500, 1001, cliente01)
console.log(conta.saldo)
