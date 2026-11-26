import { mBebida } from "./mBebida.js";
export class mBebidaFria extends mBebida {
    _grande;
    constructor({ nombre, precioBase, tipo, grande, }) {
        super({ nombre, precioBase, tipo });
        this._grande = grande;
    }
    set grande(grande) {
        this._grande = grande;
    }
    get grande() {
        return this._grande;
    }
    montoTotal() {
        if (this.grande === true) {
            return (this.precioBase * 0.20) + this.precioBase;
        }
        else {
            return this.precioBase;
        }
    }
    tipoBebida() {
        return "Fria";
    }
    gramosAzucar() {
        const subtotal = super.gramosAzucar() + 12;
        if (this.grande === true) {
            return (subtotal * 0.20) + subtotal;
        }
        else {
            return subtotal;
        }
    }
}
//# sourceMappingURL=mBebidaFria.js.map