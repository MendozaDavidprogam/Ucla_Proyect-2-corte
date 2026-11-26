import { iRecurso } from "../interfaces/iRecurso.js";

export default class vRecursoPlain implements iRecurso {
  private vista: HTMLElement;
  private inCodigo: HTMLInputElement;
  private inEstudiante: HTMLInputElement;
  private inTipo: HTMLSelectElement;
  private inDiasRetraso: HTMLInputElement;
  private inReserva: HTMLInputElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("recurso") as HTMLElement;
    this.inCodigo = document.getElementById("recurso_inCodigo") as HTMLInputElement;
    this.inEstudiante = document.getElementById("recurso_inEstudiante") as HTMLInputElement;
    this.inTipo = document.getElementById("recurso_inTipo") as HTMLSelectElement;
    this.inDiasRetraso = document.getElementById("recurso_inDiasRetraso") as HTMLInputElement;
    this.inReserva = document.getElementById("recurso_inReserva") as HTMLInputElement;
    this.btAceptar = document.getElementById("recurso_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("recurso_btCancelar") as HTMLButtonElement;
  }

  get codigo(): string {
    return this.inCodigo.value.trim();
  }
  get estudiante(): string {
    return this.inEstudiante.value.trim();
  }
  get tipo(): string {
    return this.inTipo.value;
  }
  get diasRetraso(): number {
    return +this.inDiasRetraso.value;
  }
  get reserva(): boolean {
    return this.inReserva.checked;
  }

  mostrar(): void {
    this.inCodigo.value = "";
    this.inEstudiante.value = "";
    this.inTipo.value = "Libro";
    this.inDiasRetraso.value = "";
    this.inReserva.checked = false;
    this.vista.hidden = false;
  }

  ocultar(): void {
    this.vista.hidden = true;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}
