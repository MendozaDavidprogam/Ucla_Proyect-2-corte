import mRecurso from "./mRecurso.js";
export default class mLibro extends mRecurso {
    _reserva = false;
    constructor({ codigo, estudiante, diasRetraso, reserva, }) {
        super({ codigo, estudiante, diasRetraso });
        this.reserva = reserva;
    }
    set reserva(valor) {
        this._reserva = valor;
    }
    get reserva() {
        return this._reserva;
    }
    obtenerTipo() {
        return "Libro";
    }
    calcularPago() {
        let pago = super.calcularPago();
        if (this.tieneRetraso() && this.reserva) {
            pago = pago + this.diasRetraso * 0.5;
        }
        return pago;
    }
    puntosReputacion() {
        let puntos = super.puntosReputacion();
        if (this.tieneRetraso() && this.reserva) {
            puntos = puntos * 2;
        }
        return puntos;
    }
}
//# sourceMappingURL=mLibro.js.map