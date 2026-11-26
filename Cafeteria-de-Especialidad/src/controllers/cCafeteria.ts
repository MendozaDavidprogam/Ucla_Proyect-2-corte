import { iCafeteria } from "../interfaces/iCafeteria.js";
import mCafeteria from "../models/mCafeteria.js";
import cBebida from "./cBebida.js";

export default class cCafeteria {
  private modelo: mCafeteria = new mCafeteria();
  private vista: iCafeteria;
  private controladorBebida: cBebida;

  constructor(vista: iCafeteria, controladorBebida: cBebida) {
    this.vista = vista;
    this.controladorBebida = controladorBebida;

    this.vista.onNuevaBebida(() => this.procesarUnaBebida());
  }

  private procesarUnaBebida(): void {
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
