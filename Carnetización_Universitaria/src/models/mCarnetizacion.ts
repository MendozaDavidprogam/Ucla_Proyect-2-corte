import mSolicitud from "./mSolicitud.js";

export default class mCarnetizacion {
    private _acumMontoTotal: number = 0;
    private _contReposiciones: number = 0;
    private _acumTiempoTotal: number = 0;
    private _contSolicitudes: number = 0;

    constructor() {
        this._acumMontoTotal = 0;
        this._contReposiciones = 0;
        this._acumTiempoTotal = 0;
        this._contSolicitudes = 0;
    }

    procesarSolicitud(sol: mSolicitud): void {
        this._acumMontoTotal += sol.calcularMonto();
        this._acumTiempoTotal += sol.calcularTiempoEmision();
        this._contSolicitudes++;

        if (sol.esReposicion()) {
            this._contReposiciones++;
        }
    }

    totalRecaudado(): number {
        return this._acumMontoTotal;
    }

    cantidadReposiciones(): number {
        return this._contReposiciones;
    }

    tiempoTotalEmision(): number {
        return this._acumTiempoTotal;
    }

    promedioTiempoEmision(): number {
        if (this._contSolicitudes === 0) return 0;
        return this._acumTiempoTotal / this._contSolicitudes;
    }
}