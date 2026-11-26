import { iSolicitud } from "../interfaces/iSolicitud.js";
import mSolicitud from "../models/mSolicitud.js";
import mNuevo from "../models/mNuevo.js";
import mReposicion from "../models/mReposicion.js";

export default class cSolicitud {
    private vista: iSolicitud;
    private callback!: (solicitud: mSolicitud | null) => void;

    constructor(vista: iSolicitud) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarSolicitud(callback: (solicitud: mSolicitud | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick(): void {
        const tipoNormalizado = this.vista.tipo.trim().toLowerCase();
        const instancia: mSolicitud =
            tipoNormalizado === "reposicion" || tipoNormalizado === "reposición"
                ? new mReposicion(
                      this.vista.cedula,
                      this.vista.nombre,
                      this.vista.cantExtravioPrevio
                  )
                : new mNuevo(this.vista.cedula, this.vista.nombre);

        this.vista.ocultar();
        this.callback(instancia);
    }

    private btCancelarOnClick(): void {
        this.vista.ocultar();
        this.callback(null);
    }
}