import mSolicitud from "./mSolicitud.js";
export default class mNuevo extends mSolicitud {
    constructor(cedula, nombre) {
        super(cedula, nombre);
    }
    calcularMonto() {
        return super.calcularMonto();
    }
    obtenerTipo() {
        return "Nuevo";
    }
    calcularTiempoEmision() {
        const numCedula = +this._cedula;
        if (Number.isFinite(numCedula) && numCedula > 30000000) {
            return super.calcularTiempoEmision() + 5;
        }
        return super.calcularTiempoEmision();
    }
}
//# sourceMappingURL=mNuevo.js.map