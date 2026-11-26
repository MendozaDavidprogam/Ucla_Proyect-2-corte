export default class vCarnetizacionBootstrap {
    btNuevaSolicitud;
    lblDetalleSolicitud;
    lblTotalRecaudado;
    lblCantidadReposiciones;
    lblDetalleTiempoEmision;
    lblTiempoTotalEmision;
    lblPromedioTiempoEmision;
    constructor() {
        this.btNuevaSolicitud = document.getElementById("body_btNuevaSolicitud");
        this.lblDetalleSolicitud = document.getElementById("body_lblDetalleSolicitud");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones");
        this.lblDetalleTiempoEmision = document.getElementById("body_lblDetalleTiempoEmision");
        this.lblTiempoTotalEmision = document.getElementById("body_lblTiempoTotalEmision");
        this.lblPromedioTiempoEmision = document.getElementById("body_lblPromedioTiempoEmision");
    }
    onNuevaSolicitud(callback) {
        this.btNuevaSolicitud.onclick = callback;
    }
    reportar({ detalleSolicitud, totalRecaudado, cantidadReposiciones, tiempoTotalEmision, promedioTiempoEmision, detalleTiempoEmision, }) {
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
//# sourceMappingURL=vCarnetizacionBootstrap.js.map