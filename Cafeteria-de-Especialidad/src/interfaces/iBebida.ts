export interface iBebida {
  get nombre(): string;
  get precioBase(): number;
  get tipo(): "caliente" | "fria";
  get lecheVegetal(): boolean;
  get grande(): boolean;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
