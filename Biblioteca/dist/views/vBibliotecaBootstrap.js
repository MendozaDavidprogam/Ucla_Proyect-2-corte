export default class vBibliotecaBootstrap {
    btNuevo;
    lstPrestamos;
    lstReputacion;
    lblTotalRecaudado;
    lblCantidadRetrasos;
    lblPorcentajeTablets;
    lblBalanceReputacion;
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoRecurso");
        this.lstPrestamos = document.getElementById("body_lstPrestamos");
        this.lstReputacion = document.getElementById("body_lstReputacion");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblCantidadRetrasos = document.getElementById("body_lblCantidadRetrasos");
        this.lblPorcentajeTablets = document.getElementById("body_lblPorcentajeTablets");
        this.lblBalanceReputacion = document.getElementById("body_lblBalanceReputacion");
    }
    onNuevoRecurso(callback) {
        this.btNuevo.onclick = callback;
    }
    listarPrestamo({ detalle }) {
        const linea = document.createElement("div");
        linea.className = "list-group-item";
        linea.textContent = detalle;
        this.lstPrestamos.appendChild(linea);
    }
    listarReputacion({ detalle }) {
        const linea = document.createElement("div");
        linea.className = "list-group-item";
        linea.textContent = detalle;
        this.lstReputacion.appendChild(linea);
    }
    reportar({ totalRecaudado, cantidadRetrasos, porcentajeTablets, balanceReputacion, }) {
        this.lblTotalRecaudado.innerHTML = `${totalRecaudado.toFixed(2)}`;
        this.lblCantidadRetrasos.innerHTML = `${cantidadRetrasos}`;
        this.lblPorcentajeTablets.innerHTML = `${porcentajeTablets}`;
        this.lblBalanceReputacion.innerHTML = `${balanceReputacion > 0 ? "+" : ""}${balanceReputacion}`;
    }
}
//# sourceMappingURL=vBibliotecaBootstrap.js.map