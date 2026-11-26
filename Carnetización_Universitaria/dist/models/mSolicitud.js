export default class mSolicitud {
    _cedula = "";
    _nombre = "";
    constructor(cedula, nombre) {
        this.cedula = cedula;
        this.nombre = nombre;
    }
    get _costoBase() {
        return 5;
    }
    get _tiempoEmisionBase() {
        return 10;
    }
    set cedula(cedula) {
        this._cedula = cedula.trim();
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    calcularMonto() {
        return this._costoBase;
    }
    calcularTiempoEmision() {
        return this._tiempoEmisionBase;
    }
    esReposicion() {
        return false;
    }
    obtenerTipo() {
        return "Solicitud";
    }
}
//# sourceMappingURL=mSolicitud.js.map