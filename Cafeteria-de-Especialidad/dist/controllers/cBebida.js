import { mBebidaFria } from "../models/mBebidaFria.js";
import { mCafeCaliente } from "../models/mCafeCaliente.js";
export default class cBebida {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarBebida(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        const datos = {
            nombre: this.vista.nombre,
            precioBase: this.vista.precioBase,
            tipo: this.vista.tipo,
        };
        const bebida = this.vista.tipo === "caliente"
            ? new mCafeCaliente({ ...datos, lecheVegetal: this.vista.lecheVegetal })
            : new mBebidaFria({ ...datos, grande: this.vista.grande });
        this.callback(bebida);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=cBebida.js.map