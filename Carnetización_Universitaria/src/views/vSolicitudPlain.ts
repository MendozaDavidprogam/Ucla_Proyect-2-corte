import { iSolicitud } from "../interfaces/iSolicitud.js";

export default class vSolicitudPlain implements iSolicitud {
    private vista: HTMLElement;
    private inCedula: HTMLInputElement;
    private inNombre: HTMLInputElement;
    private selTipo: HTMLSelectElement;
    private divExtravio: HTMLElement;
    private inCantExtravioPrevio: HTMLInputElement;
    private btAceptar: HTMLButtonElement;
    private btCancelar: HTMLButtonElement;

    constructor() {
        this.vista = document.getElementById("solicitud") as HTMLElement;
        this.inCedula = document.getElementById("solicitud_inCedula") as HTMLInputElement;
        this.inNombre = document.getElementById("solicitud_inNombre") as HTMLInputElement;
        this.selTipo = document.getElementById("solicitud_selTipo") as HTMLSelectElement;
        this.divExtravio = document.getElementById("solicitud_divExtravio") as HTMLElement;
        this.inCantExtravioPrevio = document.getElementById("solicitud_inCantExtravioPrevio") as HTMLInputElement;
        this.btAceptar = document.getElementById("solicitud_btAceptar") as HTMLButtonElement;
        this.btCancelar = document.getElementById("solicitud_btCancelar") as HTMLButtonElement;

        // [ARW-01] Función flecha para conservar `this` al cambiar el tipo de trámite
        this.selTipo.onchange = () => this.actualizarVisibilidadExtravios();
    }

    private actualizarVisibilidadExtravios(): void {
        const esReposicion = this.selTipo.value === "Reposicion";
        this.divExtravio.hidden = !esReposicion;
        if (!esReposicion) {
            this.inCantExtravioPrevio.value = "0";
        }
    }

    get cedula(): string {
        return this.inCedula.value.trim();
    }

    get nombre(): string {
        return this.inNombre.value.trim();
    }

    get tipo(): string {
        return this.selTipo.value.trim();
    }

    get cantExtravioPrevio(): number {
        return +this.inCantExtravioPrevio.value;
    }

    mostrar(): void {
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.selTipo.value = "Nuevo";
        this.inCantExtravioPrevio.value = "0";
        this.actualizarVisibilidadExtravios();
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