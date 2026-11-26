export interface iSolicitud {
    get cedula(): string;
    get nombre(): string;
    get tipo(): string;
    get cantExtravioPrevio(): number;

    mostrar(): void;
    ocultar(): void;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}