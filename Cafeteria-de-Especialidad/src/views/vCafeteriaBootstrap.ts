import { iCafeteria } from "../interfaces/iCafeteria.js";

export default class vCafeteriaBootstrap implements iCafeteria {
  private btNuevaBebida: HTMLButtonElement;
  private lstBebidas: HTMLElement;
  private lstAzucar: HTMLElement;
  private lblMontoTotalVenta: HTMLElement;
  private lblCantidadBebidaPrecioMayor4: HTMLElement;
  private lblPromedioAzucar: HTMLElement;

  constructor() {
    this.btNuevaBebida = document.getElementById("cafeteria_btNuevaBebida") as HTMLButtonElement;
    this.lstBebidas = document.getElementById("cafeteria_lstBebidas") as HTMLElement;
    this.lstAzucar = document.getElementById("cafeteria_lstAzucar") as HTMLElement;
    this.lblMontoTotalVenta = document.getElementById("cafeteria_lblMontoTotalVenta") as HTMLElement;
    this.lblCantidadBebidaPrecioMayor4 = document.getElementById(
      "cafeteria_lblCantidadBebidaPrecioMayor4",
    ) as HTMLElement;
    this.lblPromedioAzucar = document.getElementById("cafeteria_lblPromedioAzucar") as HTMLElement;
  }

  onNuevaBebida(callback: () => void): void {
    this.btNuevaBebida.onclick = callback;
  }

  reportar({
    nombre,
    tipo,
    monto,
    montoTotalVenta,
    cantidadBebidaPrecioMayor4,
    azucar,
    promedioAzucar,
  }: {
    nombre: string;
    tipo: string;
    monto: number;
    montoTotalVenta: number;
    cantidadBebidaPrecioMayor4: number;
    azucar: number;
    promedioAzucar: number;
  }): void {
    const item = document.createElement("div");
    item.className = "list-group-item";
    item.textContent = `${nombre} (${tipo}): $${monto.toFixed(2)}`;
    this.lstBebidas.appendChild(item);

    const itemAzucar = document.createElement("div");
    itemAzucar.className = "list-group-item";
    itemAzucar.textContent = `${nombre} -> Azúcar: ${azucar.toFixed(2)} g`;
    this.lstAzucar.appendChild(itemAzucar);

    this.lblMontoTotalVenta.textContent = `$${montoTotalVenta.toFixed(2)}`;
    this.lblCantidadBebidaPrecioMayor4.textContent = String(cantidadBebidaPrecioMayor4);
    this.lblPromedioAzucar.textContent = `${promedioAzucar.toFixed(2)} g`;
  }
}
