export default class mBiblioteca {
    acumRecaudado = 0;
    contRetrasos = 0;
    contTablets = 0;
    contPrestamos = 0;
    acumReputacion = 0;
    constructor() {
        this.acumRecaudado = 0;
        this.contRetrasos = 0;
        this.contTablets = 0;
        this.contPrestamos = 0;
        this.acumReputacion = 0;
    }
    procesarRecurso(recurso) {
        this.acumRecaudado += recurso.calcularPago();
        this.contPrestamos++;
        this.acumReputacion += recurso.puntosReputacion();
        if (recurso.tieneRetraso()) {
            this.contRetrasos++;
        }
        if (recurso.obtenerTipo() === "Tablet") {
            this.contTablets++;
        }
    }
    devolverTotalRecaudado() {
        return this.acumRecaudado;
    }
    devolverCantidadRetrasos() {
        return this.contRetrasos;
    }
    devolverBalanceReputacion() {
        return this.acumReputacion;
    }
    calcularPorcentajeTablets() {
        if (this.contPrestamos === 0)
            return 0;
        const porcentaje = (this.contTablets / this.contPrestamos) * 100;
        return Math.round(porcentaje * 100) / 100;
    }
}
//# sourceMappingURL=mBiblioteca.js.map