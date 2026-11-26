import mBiblioteca from "../models/mBiblioteca.js";
import { iBiblioteca } from "../interfaces/iBiblioteca.js";
import cRecurso from "./cRecurso.js";

export default class cBiblioteca {
  private mBiblioteca: mBiblioteca = new mBiblioteca();
  private vBiblioteca: iBiblioteca;
  private cRecurso: cRecurso;

  constructor(vistaBiblioteca: iBiblioteca, controladorRecurso: cRecurso) {
    this.vBiblioteca = vistaBiblioteca;
    this.cRecurso = controladorRecurso;

    this.vBiblioteca.onNuevoRecurso(() => this.procesar1Recurso());
  }

  private procesar1Recurso(): void {
    this.cRecurso.solicitarRecurso((recurso) => {
      if (recurso !== null) {
        this.mBiblioteca.procesarRecurso(recurso);
        this.vBiblioteca.listarPrestamo({ detalle: recurso.reportar() });
        this.vBiblioteca.listarReputacion({ detalle: recurso.reportarReputacion() });
        this.vBiblioteca.reportar({
          totalRecaudado: this.mBiblioteca.devolverTotalRecaudado(),
          cantidadRetrasos: this.mBiblioteca.devolverCantidadRetrasos(),
          porcentajeTablets: this.mBiblioteca.calcularPorcentajeTablets(),
          balanceReputacion: this.mBiblioteca.devolverBalanceReputacion(),
        });
      }
    });
  }
}
