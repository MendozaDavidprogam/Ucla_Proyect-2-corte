
import { mBebida } from "./mBebida.js";
import { mCafeCaliente } from "./mCafeCaliente.js";

export default class mCafeteria {
  private acumMontoTotal: number = 0;
  private cntBebida: number = 0;
  private acumAzucar: number = 0;
  private cntBebidasVendidas: number = 0;
  
  

  procesarBebida(b: mBebida): void {
    this.acumMontoTotal += b.montoTotal()
    this.acumAzucar += b.gramosAzucar();
    this.cntBebidasVendidas++;

    if (b.montoTotal()> 4) {
      this.cntBebida++;
    }
  }

  get montoTotalVenta(): number {
    return this.acumMontoTotal;
  }

  get cantidadBebidaPrecioMayor4(): number {
    return this.cntBebida;
  }

  get promedioAzucar(): number {
    if (this.cntBebidasVendidas === 0) return 0;
    return this.acumAzucar / this.cntBebidasVendidas;
  }


}
