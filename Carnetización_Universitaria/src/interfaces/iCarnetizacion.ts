export interface iCarnetizacion {
    onNuevaSolicitud(callback: () => void): void;

    reportar({
        detalleSolicitud,
        totalRecaudado,
        cantidadReposiciones,
        tiempoTotalEmision,
        promedioTiempoEmision,
        detalleTiempoEmision
    }: {
        detalleSolicitud: string;
        totalRecaudado: number;
        cantidadReposiciones: number;
        tiempoTotalEmision: number;
        promedioTiempoEmision: number;
        detalleTiempoEmision: string;
    }): void;
}