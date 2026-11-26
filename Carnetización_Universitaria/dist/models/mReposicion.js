import mSolicitud from "./mSolicitud.js";
export default class mReposicion extends mSolicitud {
    _cantExtravioPrevio = 0;
    constructor(cedula, nombre, cantExtravioPrevio) {
        super(cedula, nombre);
        this.cantExtravioPrevio = cantExtravioPrevio;
    }
    set cantExtravioPrevio(cantExtravioPrevio) {
        const valorNumerico = +cantExtravioPrevio;
        this._cantExtravioPrevio = Number.isFinite(valorNumerico) && valorNumerico > 0
            ? valorNumerico
            : 0;
    }
    get cantExtravioPrevio() {
        return this._cantExtravioPrevio;
    }
    calcularMonto() {
        return super.calcularMonto() + (2 * this._cantExtravioPrevio);
    }
    esReposicion() {
        return true;
    }
    obtenerTipo() {
        return "Reposicion";
    }
    calcularTiempoEmision() {
        return super.calcularTiempoEmision() + (4 * this._cantExtravioPrevio);
    }
}
//# sourceMappingURL=mReposicion.js.map