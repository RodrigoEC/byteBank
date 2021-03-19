import { Cliente } from "./Cliente.js"
import ContaCorrente from "./ContaCorrente.js"

const cliente01 = new Cliente("Rodrigo", "07345161420")
console.log(cliente01.nome)


const conta = new ContaCorrente(0, 1001)
conta.depositar(100)
conta.cliente = cliente01
console.log(conta.cliente)

console.log(ContaCorrente.numeroContas)
