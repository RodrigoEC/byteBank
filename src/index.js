import { Cliente } from './clientes/Cliente.js';
import Gerente from './funcionarios/Gerente.js';
import Diretor from './funcionarios/Diretor.js';
import SistemaAutenticacao from './SistemaAutenticacao.js';

const gerente01 = new Gerente('Rodrigo', 30000, '07345161420');
console.log(gerente01.nome);
gerente01.cadastrarSenha('oiJully');

const diretor01 = new Diretor('Josnas', 400000, '039402943');
console.log(diretor01.nome);
diretor01.cadastrarSenha('oiJully');

const cliente = new Cliente('nvai', '0758189936');
console.log(cliente.nome);
cliente.cadastrarSenha('jenniger');

const clienteLogado = SistemaAutenticacao.login(cliente, 'jenniger');

const diretorLogado = SistemaAutenticacao.login(diretor01, 'oiJully');

const gerenteLogado = SistemaAutenticacao.login(gerente01, 'oiJully');

console.log(clienteLogado, diretorLogado, gerenteLogado);
