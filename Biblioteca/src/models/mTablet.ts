import mRecurso from "./mRecurso.js";

export default class mTablet extends mRecurso {
  constructor({
    codigo,
    estudiante,
    diasRetraso,
  }: {
    codigo: string;
    estudiante: string;
    diasRetraso: number;
  }) {
    super({ codigo, estudiante, diasRetraso });
  }

  override obtenerTipo(): string {
    return "Tablet";
  }

  override calcularPago(): number {
    let pago = super.calcularPago() + 3;
    if (this.tieneRetraso()) {
      pago = pago + 4;
    }
    return pago;
  }

  override puntosReputacion(): number {
    let puntos = super.puntosReputacion();
    if (this.tieneRetraso()) {
      puntos = puntos - 10;
    } else {
      puntos = puntos + 5;
    }
    return puntos;
  }
}
