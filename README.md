# ByteBank

O bytebank foi um projeto durante o curso de programação OO com JavaScript que eu fiz na Alura. Ele foi criado para fixar os conhecimento adquiridos durante o curso.

<p align=center>
	<img src='./assets/bank.gif' width=350>
</p>

## Sobre a ByteBank

Na bytebank está dividida em 3 entidades:

**Funcionário**
O funciońário são todas as pessoas que trabalham na bytebank, independente do cargo. O Funcionário contempla as seguintes características do funcionário na empresa:
- **Nome**;
- **CPF**;
- **Salário**;
-	**Senha** do funcionário para ter acesso ao sistema do banco
-	**Bonificação no salário** que depende do cargo do funcionário

Para definir a bonificação de cada funcionario existem dois cargos atualmente criados, que são **Gerente** e **Diretor**. O Gerente possui uma bonificação de 10% sobre o salário e o diretor possui uma bonificação de 100% no seu salário _(ehhhh meu filho, os privilegio)_. 

:warning: Atenção! Não existe um funcionári que não tenha algum cargo, ou seja, não é possível instanciar um objeto do tipo Funcionário apenas.

**Cliente**
O cliente no sistema possui:
- **Nome**;
- **CPF**;
- **senha** para que seja possível fazer o acesso a sua conta.

**Conta**
Na ByteBank é possível a criação de três tipos de conta: **conta corrente**, **conta poupança** e **conta salário**. 

Toda conta possui:
- **agência**; 
- **saldo**;
- **cliente** associado 

O que diferencia os tipos de conta é a taxa sobre o saque. A conta corrente possui uma taxa de 10% sobre o saque, já conta poupança possui uma taxa de 2% e a conta salário possui uma taxa de 1% sobre o cada saque realizado.



Caso você queira rodar o projeto basta apenas seguir os próximos passos

## Passo a passo
1. Clone o repositório:
```
git clone https://github.com/RodrigoEC/byteBank.git
```

2. Instale as dependências
```
npm install
```

3. Execute o projeto
```
npm start
```
