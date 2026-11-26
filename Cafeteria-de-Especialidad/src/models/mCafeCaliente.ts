
import { mBebida} from "./mBebida.js";

export class mCafeCaliente extends mBebida {
  private _lecheVegetal: boolean;

  constructor({
    nombre,
    precioBase,
    tipo,
    lecheVegetal,
  }: {
    nombre: string;
    precioBase: number;
    tipo: string;
    lecheVegetal: boolean;
  }) {
    super({ nombre, precioBase, tipo });
    this._lecheVegetal = lecheVegetal;
  }

  set lecheVegetal(lecheVegetal: boolean) {
    this._lecheVegetal = lecheVegetal;
  }

  get lecheVegetal(): boolean {
    return this._lecheVegetal;
  }

  override montoTotal(): number {
    if(this.lecheVegetal===true){
      return this.precioBase + 0.75;
    }
    else{return this.precioBase;}
  }

  override tipoBebida(): string {
    return "Caliente"
  }

  override gramosAzucar(): number {
    if (this.lecheVegetal === true) {
      return super.gramosAzucar() / 2;
    }
    else { return super.gramosAzucar(); }
  }
}
