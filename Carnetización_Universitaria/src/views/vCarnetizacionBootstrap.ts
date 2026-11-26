import { iCarnetizacion } from "../interfaces/iCarnetizacion.js";

export default class vCarnetizacionBootstrap implements iCarnetizacion {
    private btNuevaSolicitud: HTMLButtonElement;
    private lblDetalleSolicitud: HTMLElement;
    private lblTotalRecaudado: HTMLElement;
    private lblCantidadReposiciones: HTMLElement;
    private lblDetalleTiempoEmision: HTMLElement;
    private lblTiempoTotalEmision: HTMLElement;
    private lblPromedioTiempoEmision: HTMLElement;

    constructor() {
        this.btNuevaSolicitud = document.getElementById("body_btNuevaSolicitud") as HTMLButtonElement;
        this.lblDetalleSolicitud = document.getElementById("body_lblDetalleSolicitud") as HTMLElement;
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado") as HTMLElement;
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones") as HTMLElement;
        this.lblDetalleTiempoEmision = document.getElementById("body_lblDetalleTiempoEmision") as HTMLElement;
        this.lblTiempoTotalEmision = document.getElementById("body_lblTiempoTotalEmision") as HTMLElement;
        this.lblPromedioTiempoEmision = document.getElementById("body_lblPromedioTiempoEmision") as HTMLElement;
    }

    onNuevaSolicitud(callback: () => void): void {
        this.btNuevaSolicitud.onclick = callback;
    }

    reportar({
        detalleSolicitud,
        totalRecaudado,
        cantidadReposiciones,
        tiempoTotalEmision,
        promedioTiempoEmision,
        detalleTiempoEmision,
    }: {
        detalleSolicitud: string;
        totalRecaudado: number;
        cantidadReposiciones: number;
        tiempoTotalEmision: number;
        promedioTiempoEmision: number;
        detalleTiempoEmision: string;
    }): void {
        const linea = document.createElement("div");
        linea.className = "py-1 border-bottom";
        linea.textContent = detalleSolicitud;
        this.lblDetalleSolicitud.appendChild(linea);

        this.lblTotalRecaudado.textContent = `${totalRecaudado}`;
        this.lblCantidadReposiciones.textContent = `${cantidadReposiciones}`;

        const lineaTiempo = document.createElement("div");
        lineaTiempo.className = "py-1 border-bottom font-monospace small";
        lineaTiempo.textContent = detalleTiempoEmision;
        this.lblDetalleTiempoEmision.appendChild(lineaTiempo);

        this.lblTiempoTotalEmision.textContent = `${tiempoTotalEmision} min`;
        this.lblPromedioTiempoEmision.textContent = `${promedioTiempoEmision} min`;
    }
}