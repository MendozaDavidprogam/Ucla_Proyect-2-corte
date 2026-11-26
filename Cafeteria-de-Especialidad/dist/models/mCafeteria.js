export default class mCafeteria {
    acumMontoTotal = 0;
    cntBebida = 0;
    acumAzucar = 0;
    cntBebidasVendidas = 0;
    procesarBebida(b) {
        this.acumMontoTotal += b.montoTotal();
        this.acumAzucar += b.gramosAzucar();
        this.cntBebidasVendidas++;
        if (b.montoTotal() > 4) {
            this.cntBebida++;
        }
    }
    get montoTotalVenta() {
        return this.acumMontoTotal;
    }
    get cantidadBebidaPrecioMayor4() {
        return this.cntBebida;
    }
    get promedioAzucar() {
        if (this.cntBebidasVendidas === 0)
            return 0;
        return this.acumAzucar / this.cntBebidasVendidas;
    }
}
//# sourceMappingURL=mCafeteria.js.map