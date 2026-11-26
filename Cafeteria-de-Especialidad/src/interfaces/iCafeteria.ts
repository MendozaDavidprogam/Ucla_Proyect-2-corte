export interface iCafeteria {
  onNuevaBebida(callback: () => void): void;
  reportar(datos: {
    nombre: string;
    tipo: string;
    monto: number;
    montoTotalVenta: number;
    cantidadBebidaPrecioMayor4: number;
    azucar: number;
    promedioAzucar: number;
  }): void;
}
