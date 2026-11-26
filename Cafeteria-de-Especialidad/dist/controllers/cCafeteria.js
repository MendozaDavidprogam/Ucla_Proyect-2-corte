import mCafeteria from "../models/mCafeteria.js";
export default class cCafeteria {
    modelo = new mCafeteria();
    vista;
    controladorBebida;
    constructor(vista, controladorBebida) {
        this.vista = vista;
        this.controladorBebida = controladorBebida;
        this.vista.onNuevaBebida(() => this.procesarUnaBebida());
    }
    procesarUnaBebida() {
        this.controladorBebida.solicitarBebida((bebida) => {
            if (bebida !== null) {
                this.modelo.procesarBebida(bebida);
                this.vista.reportar({
                    nombre: bebida.nombre,
                    tipo: bebida.tipoBebida(),
                    monto: bebida.montoTotal(),
                    montoTotalVenta: this.modelo.montoTotalVenta,
                    cantidadBebidaPrecioMayor4: this.modelo.cantidadBebidaPrecioMayor4,
                    azucar: bebida.gramosAzucar(),
                    promedioAzucar: this.modelo.promedioAzucar,
                });
            }
        });
    }
}
//# sourceMappingURL=cCafeteria.js.map