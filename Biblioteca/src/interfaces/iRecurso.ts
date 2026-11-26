export interface iRecurso {
  get codigo(): string;
  get estudiante(): string;
  get tipo(): string;
  get diasRetraso(): number;
  get reserva(): boolean;

  mostrar(): void;
  ocultar(): void;

  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
