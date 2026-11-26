export default class vCafeteriaBootstrap {
    btNuevaBebida;
    lstBebidas;
    lstAzucar;
    lblMontoTotalVenta;
    lblCantidadBebidaPrecioMayor4;
    lblPromedioAzucar;
    constructor() {
        this.btNuevaBebida = document.getElementById("cafeteria_btNuevaBebida");
        this.lstBebidas = document.getElementById("cafeteria_lstBebidas");
        this.lstAzucar = document.getElementById("cafeteria_lstAzucar");
        this.lblMontoTotalVenta = document.getElementById("cafeteria_lblMontoTotalVenta");
        this.lblCantidadBebidaPrecioMayor4 = document.getElementById("cafeteria_lblCantidadBebidaPrecioMayor4");
        this.lblPromedioAzucar = document.getElementById("cafeteria_lblPromedioAzucar");
    }
    onNuevaBebida(callback) {
        this.btNuevaBebida.onclick = callback;
    }
    reportar({ nombre, tipo, monto, montoTotalVenta, cantidadBebidaPrecioMayor4, azucar, promedioAzucar, }) {
        const item = document.createElement("div");
        item.className = "list-group-item";
        item.textContent = `${nombre} (${tipo}): $${monto.toFixed(2)}`;
        this.lstBebidas.appendChild(item);
        const itemAzucar = document.createElement("div");
        itemAzucar.className = "list-group-item";
        itemAzucar.textContent = `${nombre} -> Azúcar: ${azucar.toFixed(2)} g`;
        this.lstAzucar.appendChild(itemAzucar);
        this.lblMontoTotalVenta.textContent = `$${montoTotalVenta.toFixed(2)}`;
        this.lblCantidadBebidaPrecioMayor4.textContent = String(cantidadBebidaPrecioMayor4);
        this.lblPromedioAzucar.textContent = `${promedioAzucar.toFixed(2)} g`;
    }
}
//# sourceMappingURL=vCafeteriaBootstrap.js.map