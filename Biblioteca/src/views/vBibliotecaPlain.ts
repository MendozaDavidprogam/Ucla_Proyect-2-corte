import { iBiblioteca } from "../interfaces/iBiblioteca.js";

export default class vBibliotecaPlain implements iBiblioteca {
  private btNuevo: HTMLButtonElement;
  private lstPrestamos: HTMLElement;
  private lstReputacion: HTMLElement;
  private lblTotalRecaudado: HTMLElement;
  private lblCantidadRetrasos: HTMLElement;
  private lblPorcentajeTablets: HTMLElement;
  private lblBalanceReputacion: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoRecurso") as HTMLButtonElement;
    this.lstPrestamos = document.getElementById("body_lstPrestamos") as HTMLElement;
    this.lstReputacion = document.getElementById("body_lstReputacion") as HTMLElement;
    this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado") as HTMLElement;
    this.lblCantidadRetrasos = document.getElementById("body_lblCantidadRetrasos") as HTMLElement;
    this.lblPorcentajeTablets = document.getElementById("body_lblPorcentajeTablets") as HTMLElement;
    this.lblBalanceReputacion = document.getElementById("body_lblBalanceReputacion") as HTMLElement;
  }

  onNuevoRecurso(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  listarPrestamo({ detalle }: { detalle: string }): void {
    const linea = document.createElement("div");
    linea.textContent = detalle;
    this.lstPrestamos.appendChild(linea);
  }

  listarReputacion({ detalle }: { detalle: string }): void {
    const linea = document.createElement("div");
    linea.textContent = detalle;
    this.lstReputacion.appendChild(linea);
  }

  reportar({
    totalRecaudado,
    cantidadRetrasos,
    porcentajeTablets,
    balanceReputacion,
  }: {
    totalRecaudado: number;
    cantidadRetrasos: number;
    porcentajeTablets: number;
    balanceReputacion: number;
  }): void {
    this.lblTotalRecaudado.innerHTML = `${totalRecaudado.toFixed(2)}`;
    this.lblCantidadRetrasos.innerHTML = `${cantidadRetrasos}`;
    this.lblPorcentajeTablets.innerHTML = `${porcentajeTablets}`;
    this.lblBalanceReputacion.innerHTML = `${balanceReputacion > 0 ? "+" : ""}${balanceReputacion}`;
  }
}
