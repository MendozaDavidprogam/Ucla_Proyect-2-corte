import mRecurso from "./mRecurso.js";
export default class mTablet extends mRecurso {
    constructor({ codigo, estudiante, diasRetraso, }) {
        super({ codigo, estudiante, diasRetraso });
    }
    obtenerTipo() {
        return "Tablet";
    }
    calcularPago() {
        let pago = super.calcularPago() + 3;
        if (this.tieneRetraso()) {
            pago = pago + 4;
        }
        return pago;
    }
    puntosReputacion() {
        let puntos = super.puntosReputacion();
        if (this.tieneRetraso()) {
            puntos = puntos - 10;
        }
        else {
            puntos = puntos + 5;
        }
        return puntos;
    }
}
//# sourceMappingURL=mTablet.js.map