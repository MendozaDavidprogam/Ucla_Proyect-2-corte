import { iBebida } from "../interfaces/iBebida.js";
import { mBebida } from "../models/mBebida.js";
import { mBebidaFria } from "../models/mBebidaFria.js";
import { mCafeCaliente } from "../models/mCafeCaliente.js";

export default class cBebida {
  private vista: iBebida;
  private callback!: (bebida: mBebida | null) => void;

  constructor(vista: iBebida) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarBebida(callback: (bebida: mBebida | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick(): void {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick(): void {
    const datos = {
      nombre: this.vista.nombre,
      precioBase: this.vista.precioBase,
      tipo: this.vista.tipo,
    };

    const bebida =
      this.vista.tipo === "caliente"
        ? new mCafeCaliente({ ...datos, lecheVegetal: this.vista.lecheVegetal })
        : new mBebidaFria({ ...datos, grande: this.vista.grande });

    this.callback(bebida);
    this.vista.ocultar();
  }
}
