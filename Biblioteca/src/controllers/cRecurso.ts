import { iRecurso } from "../interfaces/iRecurso.js";
import mRecurso from "../models/mRecurso.js";
import mLibro from "../models/mLibro.js";
import mTablet from "../models/mTablet.js";

export default class cRecurso {
  private vista: iRecurso;
  private callback!: (recurso: mRecurso | null) => void;

  constructor(vista: iRecurso) {
    this.vista = vista;
    this.vista.onAceptar(() => this.btAceptarOnClick());
    this.vista.onCancelar(() => this.btCancelarOnClick());
  }

  solicitarRecurso(callback: (recurso: mRecurso | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btAceptarOnClick(): void {
    let instancia: mRecurso;
    if (this.vista.tipo === "Libro") {
      instancia = new mLibro({
        codigo: this.vista.codigo,
        estudiante: this.vista.estudiante,
        diasRetraso: this.vista.diasRetraso,
        reserva: this.vista.reserva,
      });
    } else {
      instancia = new mTablet({
        codigo: this.vista.codigo,
        estudiante: this.vista.estudiante,
        diasRetraso: this.vista.diasRetraso,
      });
    }
    this.vista.ocultar();
    this.callback(instancia);
  }

  private btCancelarOnClick(): void {
    this.vista.ocultar();
    this.callback(null);
  }
}
