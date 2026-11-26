export interface iBiblioteca {
  onNuevoRecurso(callback: () => void): void;

  listarPrestamo({ detalle }: { detalle: string }): void;

  listarReputacion({ detalle }: { detalle: string }): void;

  reportar({
    totalRecaudado,
    cantidadRetrasos,
    porcentajeTablets,
    balanceReputacion,
  }: {
    totalRecaudado: number;
    cantidadRetrasos: number;
    porcentajeTablets: number;
    balanceReputacion: number;
  }): void;
}
