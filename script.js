// (01) Crie uma classe chamada "Círculo" que tenha um atributo para armazenar o raio e métodos para calcular a área e o 
//perímetro do círculo.

class areaCirculo {
    constructor(area) {
        this.area = area
    }
    calcArea () {
        return Math.PI * (this.raio ** 2);
    }
    calcPerimetro () {
        return 2 * Math.PI * this.raio;
    }
}

const meuCirculo = new areaCirculo(5)
console.log(meuCirculo.calcArea()) // DEVE RETORNAR A ÁREA DO CÍRCULO
console.log(meuCirculo.calcPerimetro()) // DEVE RETORNAR O PERÍMETRO DO CÍRCULO
//-------------------------------------------- FIM DA EXECUÇÃO DO PROGRAMA -----------------------------------------//

//Implemente uma classe chamada "Retângulo" com atributos para armazenar a largura e a altura. Adicione métodos para 
//calcular a área e o perímetro do retângulo.
class retangulo {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    calcAreaRetangulo () {
        return (this.altura) * (this.largura)
    }
    calcPerimetroRetangulo () {
        return (this.altura * 2) + (this.largura * 2)
    }
}
const meuRetangulo = new retangulo(10,10)
console.log(calcAreaRetangulo()) // DEVE RETORNAR A ÁREA DO RETÂNGULO
console.log(calcPerimetroRetangulo()) // DEVE RETORNAR O PERÍMETRO DO RETÂNGULO
//------------------------------------------- FIM DA EXECUÇÃO DO PROGRAMA -----------------------------------------//

//

//Crie uma classe "ContaBancária" com atributos como nome do titular, número da conta e saldo. Implemente métodos 
//para depositar dinheiro, sacar dinheiro e verificar o saldo disponível.
class ContaBancaria {
    constructor(nomeTitular, numeroConta) {
      this.nomeTitular = nomeTitular;
      this.numeroConta = numeroConta;
      this.saldo = 0;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado na conta ${this.numeroConta}. Saldo atual: ${this.saldo}`);
      } else {
        console.log('O valor do depósito deve ser maior que zero.');
      }
    }
  
    sacar(valor) {
      if (valor > 0) {
        if (valor <= this.saldo) {
          this.saldo -= valor;
          console.log(`Saque de ${valor} realizado na conta ${this.numeroConta}. Saldo atual: ${this.saldo}`);
        } else {
          console.log('Saldo insuficiente para realizar o saque.');
        }
      } else {
        console.log('O valor do saque deve ser maior que zero.');
      }
    }
  
    verificarSaldo() {
      console.log(`Saldo atual da conta ${this.numeroConta}: ${this.saldo}`);
    }
  }
  
  // Exemplo de uso
  const minhaConta = new ContaBancaria('Fulano', '12345');
  minhaConta.depositar(1000); // Saída esperada: Depósito de 1000 realizado na conta 12345. Saldo atual: 1000
  minhaConta.sacar(500); // Saída esperada: Saque de 500 realizado na conta 12345. Saldo atual: 500
  minhaConta.verificarSaldo(); // Saída esperada: Saldo atual da conta 12345: 500
  














