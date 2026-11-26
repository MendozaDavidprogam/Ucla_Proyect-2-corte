export default class vSolicitudPlain {
    vista;
    inCedula;
    inNombre;
    selTipo;
    divExtravio;
    inCantExtravioPrevio;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("solicitud");
        this.inCedula = document.getElementById("solicitud_inCedula");
        this.inNombre = document.getElementById("solicitud_inNombre");
        this.selTipo = document.getElementById("solicitud_selTipo");
        this.divExtravio = document.getElementById("solicitud_divExtravio");
        this.inCantExtravioPrevio = document.getElementById("solicitud_inCantExtravioPrevio");
        this.btAceptar = document.getElementById("solicitud_btAceptar");
        this.btCancelar = document.getElementById("solicitud_btCancelar");
        // [ARW-01] Función flecha para conservar `this` al cambiar el tipo de trámite
        this.selTipo.onchange = () => this.actualizarVisibilidadExtravios();
    }
    actualizarVisibilidadExtravios() {
        const esReposicion = this.selTipo.value === "Reposicion";
        this.divExtravio.hidden = !esReposicion;
        if (!esReposicion) {
            this.inCantExtravioPrevio.value = "0";
        }
    }
    get cedula() {
        return this.inCedula.value.trim();
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get tipo() {
        return this.selTipo.value.trim();
    }
    get cantExtravioPrevio() {
        return +this.inCantExtravioPrevio.value;
    }
    mostrar() {
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.selTipo.value = "Nuevo";
        this.inCantExtravioPrevio.value = "0";
        this.actualizarVisibilidadExtravios();
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vSolicitudPlain.js.map