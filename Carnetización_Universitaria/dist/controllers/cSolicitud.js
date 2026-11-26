import mNuevo from "../models/mNuevo.js";
import mReposicion from "../models/mReposicion.js";
export default class cSolicitud {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarSolicitud(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        const tipoNormalizado = this.vista.tipo.trim().toLowerCase();
        const instancia = tipoNormalizado === "reposicion" || tipoNormalizado === "reposición"
            ? new mReposicion(this.vista.cedula, this.vista.nombre, this.vista.cantExtravioPrevio)
            : new mNuevo(this.vista.cedula, this.vista.nombre);
        this.vista.ocultar();
        this.callback(instancia);
    }
    btCancelarOnClick() {
        this.vista.ocultar();
        this.callback(null);
    }
}
//# sourceMappingURL=cSolicitud.js.map