import mRecurso from "./mRecurso.js";

export default class mLibro extends mRecurso {
  private _reserva: boolean = false;

  constructor({
    codigo,
    estudiante,
    diasRetraso,
    reserva,
  }: {
    codigo: string;
    estudiante: string;
    diasRetraso: number;
    reserva: boolean;
  }) {
    super({ codigo, estudiante, diasRetraso });
    this.reserva = reserva;
  }

  set reserva(valor: boolean) {
    this._reserva = valor;
  }
  get reserva(): boolean {
    return this._reserva;
  }

  override obtenerTipo(): string {
    return "Libro";
  }

  override calcularPago(): number {
    let pago = super.calcularPago();
    if (this.tieneRetraso() && this.reserva) {
      pago = pago + this.diasRetraso * 0.5;
    }
    return pago;
  }

  override puntosReputacion(): number {
    let puntos = super.puntosReputacion();
    if (this.tieneRetraso() && this.reserva) {
      puntos = puntos * 2;
    }
    return puntos;
  }
}
