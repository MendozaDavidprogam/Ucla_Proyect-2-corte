import mCarnetizacion from "../models/mCarnetizacion.js";
import { iCarnetizacion } from "../interfaces/iCarnetizacion.js";
import cSolicitud from "./cSolicitud.js";

export default class cCarnetizacion {
    private mCarnetizacion: mCarnetizacion = new mCarnetizacion();
    private vCarnetizacion: iCarnetizacion;
    private cSolicitud: cSolicitud;

    constructor(vistaMayor: iCarnetizacion, controladorMenor: cSolicitud) {
        this.vCarnetizacion = vistaMayor;
        this.cSolicitud = controladorMenor;
        this.vCarnetizacion.onNuevaSolicitud(() => this.procesar1Solicitud());
    }

    private procesar1Solicitud(): void {
        this.cSolicitud.solicitarSolicitud((solicitud) => {
            if (solicitud !== null) {
                const detalleSolicitud = `${solicitud.nombre} (${solicitud.cedula}) debe pagar: $${solicitud.calcularMonto()}`;
                const detalleTiempoEmision = `${solicitud.nombre} (${solicitud.cedula}) -> Tiempo de emisión: ${solicitud.calcularTiempoEmision()} min`;

                this.mCarnetizacion.procesarSolicitud(solicitud);
                this.vCarnetizacion.reportar({
                    detalleSolicitud,
                    totalRecaudado: this.mCarnetizacion.totalRecaudado(),
                    cantidadReposiciones: this.mCarnetizacion.cantidadReposiciones(),
                    tiempoTotalEmision: this.mCarnetizacion.tiempoTotalEmision(),
                    promedioTiempoEmision: this.mCarnetizacion.promedioTiempoEmision(),
                    detalleTiempoEmision
                });
            }
        });
    }
}