export default class vCarnetizacionPlain {
    btNuevaSolicitud;
    lblDetalleSolicitud;
    lblTotalRecaudado;
    lblCantidadReposiciones;
    lblTiempoTotalEmision;
    lblPromedioTiempoEmision;
    lblDetalleTiempoEmision;
    constructor() {
        this.btNuevaSolicitud = document.getElementById("body_btNuevaSolicitud");
        this.lblDetalleSolicitud = document.getElementById("body_lblDetalleSolicitud");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones");
        this.lblTiempoTotalEmision = document.getElementById("body_lblTiempoTotalEmision");
        this.lblPromedioTiempoEmision = document.getElementById("body_lblPromedioTiempoEmision");
        this.lblDetalleTiempoEmision = document.getElementById("body_lblDetalleTiempoEmision");
    }
    onNuevaSolicitud(callback) {
        this.btNuevaSolicitud.onclick = callback;
    }
    reportar({ detalleSolicitud, totalRecaudado, cantidadReposiciones, tiempoTotalEmision, promedioTiempoEmision, detalleTiempoEmision, }) {
        const linea = document.createElement("div");
        linea.textContent = detalleSolicitud;
        this.lblDetalleSolicitud.appendChild(linea);
        this.lblTotalRecaudado.textContent = `${totalRecaudado}`;
        this.lblCantidadReposiciones.textContent = `${cantidadReposiciones}`;
        this.lblTiempoTotalEmision.textContent = `${tiempoTotalEmision} min`;
        this.lblPromedioTiempoEmision.textContent = `${promedioTiempoEmision} min`;
        const lineaDos = document.createElement("div");
        lineaDos.textContent = detalleTiempoEmision;
        this.lblDetalleTiempoEmision.appendChild(lineaDos);
    }
}
//# sourceMappingURL=vCarnetizacionPlain.js.map