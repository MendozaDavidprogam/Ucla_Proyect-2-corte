export default class vBebidaPlain {
    vista;
    inNombre;
    inPrecioBase;
    selTipo;
    chkLecheVegetal;
    chkGrande;
    rowLecheVegetal;
    rowGrande;
    btCancelar;
    btAceptar;
    constructor() {
        this.vista = document.getElementById("bebida");
        this.inNombre = document.getElementById("bebida_inNombre");
        this.inPrecioBase = document.getElementById("bebida_inPrecioBase");
        this.selTipo = document.getElementById("bebida_selTipo");
        this.chkLecheVegetal = document.getElementById("bebida_chkLecheVegetal");
        this.chkGrande = document.getElementById("bebida_chkGrande");
        this.rowLecheVegetal = document.getElementById("bebida_rowLecheVegetal");
        this.rowGrande = document.getElementById("bebida_rowGrande");
        this.btCancelar = document.getElementById("bebida_btCancelar");
        this.btAceptar = document.getElementById("bebida_btAceptar");
        this.selTipo.onchange = () => this.actualizarCampos();
    }
    actualizarCampos() {
        const esCaliente = this.selTipo.value === "caliente";
        this.rowLecheVegetal.hidden = !esCaliente;
        this.rowGrande.hidden = esCaliente;
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get precioBase() {
        return +this.inPrecioBase.value;
    }
    get tipo() {
        return this.selTipo.value === "caliente" ? "caliente" : "fria";
    }
    get lecheVegetal() {
        return this.chkLecheVegetal.checked;
    }
    get grande() {
        return this.chkGrande.checked;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inPrecioBase.value = "";
        this.selTipo.value = "caliente";
        this.chkLecheVegetal.checked = false;
        this.chkGrande.checked = false;
        this.actualizarCampos();
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vBebidaPlain.js.map