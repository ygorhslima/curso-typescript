abstract class Conta {
/**DEIXANDO O MÉTODO DE NÚMERO SEGURO, ATÉ PARA AS CLASSES FILHAS, UTILIZANDO A PALAVRA RESERVADA readonly(SOMENTE LEITURA) */
  private readonly numero: number;
  protected titular: string;
  protected saldo_conta: number;

  constructor(titular: string) {
    this.numero = this.gerarNumero();
    this.titular = titular;
    this.saldo_conta = 0;
  }

  public getTitular(): string {
    return this.titular;
  }
  public setTitular(titular: string) {
    this.titular = titular;
  }

  public getSaldo_conta(): number {
    return this.saldo_conta;
  }
  public setSaldo_conta(saldo_conta: number) {
    this.saldo_conta = saldo_conta;
  }

  gerarNumero(): number {
    return Math.floor(Math.random() * 100000);
  }

  protected info(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
  }

  public saldo(): number {
    return this.saldo_conta;
  }

  protected deposito(valor: number) {
    if (valor < 0) {
      console.log("valor inválido");
      return;
    }
    this.setSaldo_conta(this.getSaldo_conta()+valor);
  }

  protected saque(valor: number) {
    if (valor < 0) {
      console.log("valor inválido");
      return;
    }

    if (valor <= this.getSaldo_conta()) {
      this.setSaldo_conta(this.getSaldo_conta()-valor);
    } else {
      console.log("saldo insuficiente");
    }
  }
}

class ContaPessoaFisica extends Conta{
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
    }

    
    info():void{
        console.log("====PESSOA FÍSICA====");
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('--------------------');
    }
  
    public deposito(valor:number){
        if(valor > 1000){
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }else{
            super.deposito(valor);
        }
    }

    public saque(valor:number){
        if(valor > 1000){
            console.log(`valor de saque muito grande para este tpo de conta`);
        }else{
            super.saque(valor);
        }
    }

}


class ContaPessoaJuridica extends Conta{
   
    cnpj:number;
    constructor (cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;
    }

    info():void{
        console.log("====PESSOA JURÍDICA====");
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('--------------------');
    }

    public deposito(valor:number){
        if(valor > 10000){
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }else{
            super.deposito(valor);
        }
    }

    public saque(valor:number){
        if(valor > 10000){
            console.log(`valor de saque muito grande para este tpo de conta`);
        }else{
            super.saque(valor);
        }
    }
}
const conta2 = new ContaPessoaFisica(1111,"joao");
const conta3 = new ContaPessoaJuridica(222333,"Luana");
conta2.info()
conta3.info();

conta2.deposito(400);
console.log(conta2.saldo())

conta2.saque(100)
console.log(conta2.saldo());
