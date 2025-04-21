class Computador {
  /**MODIFICADOR DE ACESSO ATRIBUTOS = VALOR */
  private nome: string = "";
  private ram: number = 0;
  private cpu: number = 0;
  private ligado: boolean = false;

  /**MÉTODO CONSTRUTOR */
  constructor(nome: string, ram: number, cpu: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
  }

  /*MÉTODO*/
  info(): void {
    console.log(`Nome.....:${this.nome}`);
    console.log(`Ram......:${this.ram}`);
    console.log(`cpu......:${this.cpu}`);
    console.log(`ligado...:${this.ligado ? "SIM" : "NÃO"}`);
    console.log("---------------------------------");
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }

  upgradeRam(qtde:number):void{
    this.ram=qtde;

    if(this.ram <= 0){
      console.log(`ERRO! Quantidade ${this.getRam()} para o computador ${this.getNome()} está abaixo ou igual a 0, (considere 2 de RAM no mínimo `);
      this.setRam(2);
    }
  
  }

  public getNome() {
    return this.nome;
  }

  public setNome(n: string) {
    this.nome = n;
  }

  public getRam(): number {
    return this.ram;
  }
  private setRam(value: number) {
    this.ram = value;
  }

  public getCpu(): number {
    return this.cpu;
  }
  
  public setCpu(value: number) {
    this.cpu = value;
  }

  public getLigado(): boolean {
    return this.ligado;
  }
  public setLigado(value: boolean) {
    this.ligado = value;
  }
}

/**INSTÂNCIAS DE OBJETOS */
const comp_1 = new Computador("PCdaNASA",64,70);
const comp_2 = new Computador("Baratão",8,10);
const comp_3 = new Computador("GAMER",32,20);

comp_1.setLigado(true);
comp_1.upgradeRam(-100);
/**obtendo o método da classe Computador */
comp_1.info();
comp_2.info();
comp_3.info();