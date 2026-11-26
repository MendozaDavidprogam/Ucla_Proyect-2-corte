import { iBebida } from "../interfaces/iBebida.js";

declare const bootstrap: {
  Modal: new (element: HTMLElement) => { show(): void; hide(): void };
};

export default class vBebidaBootstrap implements iBebida {
  private inNombre: HTMLInputElement;
  private inPrecioBase: HTMLInputElement;
  private selTipo: HTMLSelectElement;
  private chkLecheVegetal: HTMLInputElement;
  private chkGrande: HTMLInputElement;
  private rowLecheVegetal: HTMLElement;
  private rowGrande: HTMLElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private modal: InstanceType<typeof bootstrap.Modal>;

  constructor() {
    this.inNombre = document.getElementById("bebida_inNombre") as HTMLInputElement;
    this.inPrecioBase = document.getElementById("bebida_inPrecioBase") as HTMLInputElement;
    this.selTipo = document.getElementById("bebida_selTipo") as HTMLSelectElement;
    this.chkLecheVegetal = document.getElementById("bebida_chkLecheVegetal") as HTMLInputElement;
    this.chkGrande = document.getElementById("bebida_chkGrande") as HTMLInputElement;
    this.rowLecheVegetal = document.getElementById("bebida_rowLecheVegetal") as HTMLElement;
    this.rowGrande = document.getElementById("bebida_rowGrande") as HTMLElement;
    this.btCancelar = document.getElementById("bebida_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("bebida_btAceptar") as HTMLButtonElement;
    this.modal = new bootstrap.Modal(document.getElementById("bebida") as HTMLElement);

    this.selTipo.onchange = () => this.actualizarCampos();
  }

  private actualizarCampos(): void {
    const esCaliente = this.selTipo.value === "caliente";
    this.rowLecheVegetal.hidden = !esCaliente;
    this.rowGrande.hidden = esCaliente;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get precioBase(): number {
    return +this.inPrecioBase.value;
  }

  get tipo(): "caliente" | "fria" {
    return this.selTipo.value === "caliente" ? "caliente" : "fria";
  }

  get lecheVegetal(): boolean {
    return this.chkLecheVegetal.checked;
  }

  get grande(): boolean {
    return this.chkGrande.checked;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inPrecioBase.value = "";
    this.selTipo.value = "caliente";
    this.chkLecheVegetal.checked = false;
    this.chkGrande.checked = false;
    this.actualizarCampos();
    this.modal.show();
  }

  ocultar(): void {
    this.modal.hide();
  }
}
