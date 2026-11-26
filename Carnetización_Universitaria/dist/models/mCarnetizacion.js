export default class mCarnetizacion {
    _acumMontoTotal = 0;
    _contReposiciones = 0;
    _acumTiempoTotal = 0;
    _contSolicitudes = 0;
    constructor() {
        this._acumMontoTotal = 0;
        this._contReposiciones = 0;
        this._acumTiempoTotal = 0;
        this._contSolicitudes = 0;
    }
    procesarSolicitud(sol) {
        this._acumMontoTotal += sol.calcularMonto();
        this._acumTiempoTotal += sol.calcularTiempoEmision();
        this._contSolicitudes++;
        if (sol.esReposicion()) {
            this._contReposiciones++;
        }
    }
    totalRecaudado() {
        return this._acumMontoTotal;
    }
    cantidadReposiciones() {
        return this._contReposiciones;
    }
    tiempoTotalEmision() {
        return this._acumTiempoTotal;
    }
    promedioTiempoEmision() {
        if (this._contSolicitudes === 0)
            return 0;
        return this._acumTiempoTotal / this._contSolicitudes;
    }
}
//# sourceMappingURL=mCarnetizacion.js.map