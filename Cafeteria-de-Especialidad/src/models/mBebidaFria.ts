
import {mBebida } from "./mBebida.js";

export class mBebidaFria extends mBebida {
  private _grande: boolean;

  constructor({
    nombre,
    precioBase,
    tipo,
    grande,
  }: {
    nombre: string;
    precioBase: number;
    tipo: string;
    grande: boolean;
  }) {
    super({ nombre, precioBase, tipo });
    this._grande = grande;
  }

  set grande(grande: boolean) {
    this._grande = grande;
  }

  get grande(): boolean {
    return this._grande;
  }

  override montoTotal(): number {
    if (this.grande === true) {
      return (this.precioBase * 0.20)+ this.precioBase;
    }
    else{return this.precioBase;}
  }

  override tipoBebida(): string {
    return "Fria"
  }

  override gramosAzucar(): number {
    const subtotal = super.gramosAzucar() + 12;
    if (this.grande === true) {
      return (subtotal * 0.20) + subtotal;
    }
    else { return subtotal; }
  }
}
