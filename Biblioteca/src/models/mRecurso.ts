export default class mRecurso {
  protected _codigo: string = "";
  protected _estudiante: string = "";
  protected _diasRetraso: number = 0;

  constructor({
    codigo,
    estudiante,
    diasRetraso,
  }: {
    codigo: string;
    estudiante: string;
    diasRetraso: number;
  }) {
    this.codigo = codigo;
    this.estudiante = estudiante;
    this.diasRetraso = diasRetraso;
  }

  set codigo(valor: string) {
    this._codigo = valor.trim();
  }
  get codigo(): string {
    return this._codigo;
  }

  set estudiante(valor: string) {
    this._estudiante = valor.trim();
  }
  get estudiante(): string {
    return this._estudiante;
  }

  set diasRetraso(valor: number) {
    this._diasRetraso = Math.max(0, +valor);
  }
  get diasRetraso(): number {
    return this._diasRetraso;
  }

  tieneRetraso(): boolean {
    return this.diasRetraso > 0;
  }

  obtenerTipo(): string {
    return "Recurso";
  }

  calcularPago(): number {
    return this.diasRetraso * 1;
  }

  puntosReputacion(): number {
    if (!this.tieneRetraso()) {
      return 10;
    }
    return -5 * this.diasRetraso;
  }

  reportar(): string {
    return `Préstamo ${this.codigo} (${this.estudiante}): $${this.calcularPago().toFixed(2)}`;
  }

  reportarReputacion(): string {
    const puntos = this.puntosReputacion();
    const signo = puntos > 0 ? "+" : "";
    return `Préstamo ${this.codigo} (${this.estudiante}) -> Reputación: ${signo}${puntos} pts`;
  }
}
