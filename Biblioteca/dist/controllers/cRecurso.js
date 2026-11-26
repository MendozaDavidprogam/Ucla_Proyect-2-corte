import mLibro from "../models/mLibro.js";
import mTablet from "../models/mTablet.js";
export default class cRecurso {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarRecurso(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        let instancia;
        if (this.vista.tipo === "Libro") {
            instancia = new mLibro({
                codigo: this.vista.codigo,
                estudiante: this.vista.estudiante,
                diasRetraso: this.vista.diasRetraso,
                reserva: this.vista.reserva,
            });
        }
        else {
            instancia = new mTablet({
                codigo: this.vista.codigo,
                estudiante: this.vista.estudiante,
                diasRetraso: this.vista.diasRetraso,
            });
        }
        this.vista.ocultar();
        this.callback(instancia);
    }
    btCancelarOnClick() {
        this.vista.ocultar();
        this.callback(null);
    }
}
//# sourceMappingURL=cRecurso.js.map