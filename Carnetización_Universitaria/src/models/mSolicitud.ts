export default class mSolicitud {
    protected _cedula: string = "";
    protected _nombre: string = "";
    constructor(cedula: string, nombre: string) {
        this.cedula = cedula;
        this.nombre = nombre;
    }

    protected get _costoBase(): number {
        return 5;
    }

    protected get _tiempoEmisionBase(): number {
        return 10;
    }

    set cedula(cedula: string) {
        this._cedula = cedula.trim();
    }

    get cedula(): string {
        return this._cedula;
    }

    set nombre(nombre: string) {
        this._nombre = nombre.trim();
    }

    get nombre(): string {
        return this._nombre;
    }

    calcularMonto(): number {
        return this._costoBase;
    }

    calcularTiempoEmision(): number {
        return this._tiempoEmisionBase;
    }

    esReposicion(): boolean {
        return false;
    }

    obtenerTipo(): string {
        return "Solicitud";
    }
}