import mSolicitud from "./mSolicitud.js";

export default class mNuevo extends mSolicitud {
    constructor(cedula: string, nombre: string) {
        super(cedula, nombre);
    }

    override calcularMonto(): number {
        return super.calcularMonto();
    }

    override obtenerTipo(): string {
        return "Nuevo";
    }

    override calcularTiempoEmision(): number {
        const numCedula = +this._cedula;
        if (Number.isFinite(numCedula) && numCedula > 30000000) {
            return super.calcularTiempoEmision() + 5;
        }
        return super.calcularTiempoEmision();
    }
}