export class mBebida {
    _nombre;
    _precioBase;
    _tipo;
    constructor({ nombre, precioBase, tipo, }) {
        this._nombre = nombre.trim();
        this._precioBase = +precioBase;
        this._tipo = tipo.trim();
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set precioBase(precioBase) {
        this._precioBase = +precioBase;
    }
    get precioBase() {
        return this._precioBase;
    }
    set tipo(tipo) {
        this._tipo = tipo.trim();
    }
    get tipo() {
        return this._tipo;
    }
    gramosAzucar() {
        return 10;
    }
}
//# sourceMappingURL=mBebida.js.map