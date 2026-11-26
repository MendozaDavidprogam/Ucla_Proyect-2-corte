import mSolicitud from "./mSolicitud.js";

export default class mReposicion extends mSolicitud {
    private _cantExtravioPrevio: number = 0;

    constructor(cedula: string, nombre: string, cantExtravioPrevio: number) {
        super(cedula, nombre);
        this.cantExtravioPrevio = cantExtravioPrevio;
    }

    set cantExtravioPrevio(cantExtravioPrevio: number) {
        const valorNumerico = +cantExtravioPrevio;
        this._cantExtravioPrevio = Number.isFinite(valorNumerico) && valorNumerico > 0
            ? valorNumerico
            : 0;
    }

    get cantExtravioPrevio(): number {
        return this._cantExtravioPrevio;
    }

    override calcularMonto(): number {
        return super.calcularMonto() + (2 * this._cantExtravioPrevio);
    }

    override esReposicion(): boolean {
        return true;
    }

    override obtenerTipo(): string {
        return "Reposicion";
    }

    override calcularTiempoEmision(): number {
        return super.calcularTiempoEmision() + (4 * this._cantExtravioPrevio);
    }
}