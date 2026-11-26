export default class vRecursoPlain {
    vista;
    inCodigo;
    inEstudiante;
    inTipo;
    inDiasRetraso;
    inReserva;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("recurso");
        this.inCodigo = document.getElementById("recurso_inCodigo");
        this.inEstudiante = document.getElementById("recurso_inEstudiante");
        this.inTipo = document.getElementById("recurso_inTipo");
        this.inDiasRetraso = document.getElementById("recurso_inDiasRetraso");
        this.inReserva = document.getElementById("recurso_inReserva");
        this.btAceptar = document.getElementById("recurso_btAceptar");
        this.btCancelar = document.getElementById("recurso_btCancelar");
    }
    get codigo() {
        return this.inCodigo.value.trim();
    }
    get estudiante() {
        return this.inEstudiante.value.trim();
    }
    get tipo() {
        return this.inTipo.value;
    }
    get diasRetraso() {
        return +this.inDiasRetraso.value;
    }
    get reserva() {
        return this.inReserva.checked;
    }
    mostrar() {
        this.inCodigo.value = "";
        this.inEstudiante.value = "";
        this.inTipo.value = "Libro";
        this.inDiasRetraso.value = "";
        this.inReserva.checked = false;
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
//# sourceMappingURL=vRecursoPlain.js.map