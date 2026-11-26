import mBiblioteca from "../models/mBiblioteca.js";
export default class cBiblioteca {
    mBiblioteca = new mBiblioteca();
    vBiblioteca;
    cRecurso;
    constructor(vistaBiblioteca, controladorRecurso) {
        this.vBiblioteca = vistaBiblioteca;
        this.cRecurso = controladorRecurso;
        this.vBiblioteca.onNuevoRecurso(() => this.procesar1Recurso());
    }
    procesar1Recurso() {
        this.cRecurso.solicitarRecurso((recurso) => {
            if (recurso !== null) {
                this.mBiblioteca.procesarRecurso(recurso);
                this.vBiblioteca.listarPrestamo({ detalle: recurso.reportar() });
                this.vBiblioteca.listarReputacion({ detalle: recurso.reportarReputacion() });
                this.vBiblioteca.reportar({
                    totalRecaudado: this.mBiblioteca.devolverTotalRecaudado(),
                    cantidadRetrasos: this.mBiblioteca.devolverCantidadRetrasos(),
                    porcentajeTablets: this.mBiblioteca.calcularPorcentajeTablets(),
                    balanceReputacion: this.mBiblioteca.devolverBalanceReputacion(),
                });
            }
        });
    }
}
//# sourceMappingURL=cBiblioteca.js.map