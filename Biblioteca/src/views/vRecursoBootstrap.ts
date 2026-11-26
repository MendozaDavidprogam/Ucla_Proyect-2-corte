import { iRecurso } from "../interfaces/iRecurso.js";

declare const bootstrap: {
  Modal: new (
    elemento: HTMLElement,
    opciones?: { backdrop?: boolean | "static"; keyboard?: boolean },
  ) => { show(): void; hide(): void };
};

export default class vRecursoBootstrap implements iRecurso {
  private vista: { show(): void; hide(): void };
  private inCodigo: HTMLInputElement;
  private inEstudiante: HTMLInputElement;
  private inTipo: HTMLSelectElement;
  private inDiasRetraso: HTMLInputElement;
  private inReserva: HTMLInputElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = new bootstrap.Modal(document.getElementById("recurso") as HTMLElement, {
      backdrop: "static",
      keyboard: false,
    });
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
    this.vista.show();
  }

  ocultar(): void {
    this.vista.hide();
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}
