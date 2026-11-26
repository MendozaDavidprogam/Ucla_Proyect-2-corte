export default class mRecurso {
    _codigo = "";
    _estudiante = "";
    _diasRetraso = 0;
    constructor({ codigo, estudiante, diasRetraso, }) {
        this.codigo = codigo;
        this.estudiante = estudiante;
        this.diasRetraso = diasRetraso;
    }
    set codigo(valor) {
        this._codigo = valor.trim();
    }
    get codigo() {
        return this._codigo;
    }
    set estudiante(valor) {
        this._estudiante = valor.trim();
    }
    get estudiante() {
        return this._estudiante;
    }
    set diasRetraso(valor) {
        this._diasRetraso = Math.max(0, +valor);
    }
    get diasRetraso() {
        return this._diasRetraso;
    }
    tieneRetraso() {
        return this.diasRetraso > 0;
    }
    obtenerTipo() {
        return "Recurso";
    }
    calcularPago() {
        return this.diasRetraso * 1;
    }
    puntosReputacion() {
        if (!this.tieneRetraso()) {
            return 10;
        }
        return -5 * this.diasRetraso;
    }
    reportar() {
        return `Préstamo ${this.codigo} (${this.estudiante}): $${this.calcularPago().toFixed(2)}`;
    }
    reportarReputacion() {
        const puntos = this.puntosReputacion();
        const signo = puntos > 0 ? "+" : "";
        return `Préstamo ${this.codigo} (${this.estudiante}) -> Reputación: ${signo}${puntos} pts`;
    }
}
//# sourceMappingURL=mRecurso.js.map