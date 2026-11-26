export abstract class mBebida {
  protected _nombre: string;
  protected _precioBase: number;
  protected _tipo: string;

  constructor({
    nombre,
    precioBase,
    tipo,
  }: {
    nombre: string;
    precioBase: number;
    tipo: string;
  }) {
    this._nombre = nombre.trim();
    this._precioBase = +precioBase;
    this._tipo = tipo.trim();
  }

  set nombre(nombre: string) {
    this._nombre = nombre.trim();
  }

  get nombre(): string {
    return this._nombre;
  }

  set precioBase(precioBase: number) {
    this._precioBase = +precioBase
  }

  get precioBase():number {
    return this._precioBase;
  }

  set tipo(tipo: string) {
    this._tipo = tipo.trim();
  }
  
  get tipo():string {
    return this._tipo;
  }

  abstract montoTotal(): number;
  abstract tipoBebida():string

  gramosAzucar(): number {
    return 10;
  }
}
