import mRecurso from "./mRecurso.js";

export default class mBiblioteca {
  private acumRecaudado: number = 0;
  private contRetrasos: number = 0;
  private contTablets: number = 0;
  private contPrestamos: number = 0;
  private acumReputacion: number = 0;

  constructor() {
    this.acumRecaudado = 0;
    this.contRetrasos = 0;
    this.contTablets = 0;
    this.contPrestamos = 0;
    this.acumReputacion = 0;
  }

  procesarRecurso(recurso: mRecurso): void {
    this.acumRecaudado += recurso.calcularPago();
    this.contPrestamos++;
    this.acumReputacion += recurso.puntosReputacion();
    if (recurso.tieneRetraso()) {
      this.contRetrasos++;
    }
    if (recurso.obtenerTipo() === "Tablet") {
      this.contTablets++;
    }
  }

  devolverTotalRecaudado(): number {
    return this.acumRecaudado;
  }

  devolverCantidadRetrasos(): number {
    return this.contRetrasos;
  }

  devolverBalanceReputacion(): number {
    return this.acumReputacion;
  }

  calcularPorcentajeTablets(): number {
    if (this.contPrestamos === 0) return 0;
    const porcentaje = (this.contTablets / this.contPrestamos) * 100;
    return Math.round(porcentaje * 100) / 100;
  }
}
