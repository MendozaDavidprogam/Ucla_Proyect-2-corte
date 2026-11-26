CARNETIZACIÓN UNIVERSITARIA
En el módulo de emisión de carnets estudiantiles (clase mayor: mCarnetizacion ) se procesan las solicitudes de identificación
(clase menor base: mSolicitud ), de las cuales se conoce la cédula y el nombre del estudiante, sabiendo que todo trámite tiene un
costo base de $5. Existen dos tipos de trámites especializados: Carnet Nuevo ( mNuevo , que solo paga el costo base) y Reposición por
Extravío ( mReposicion , que además del costo base cobra $2 por cada extravío previo reportado).
Se requiere calcular el monto a pagar por cada solicitud, el monto total recaudado por el departamento y la cantidad de carnets emitidos
por reposición.
Datos de entrada:
28111222 , Ana , Tipo: Nuevo
29333444 , Luis , Tipo: Reposición , Extravíos previos: 1
30555666 , Carla , Tipo: Nuevo
27888999 , Diego , Tipo: Reposición , Extravíos previos: 2
31000111 , Sofía , Tipo: Reposición , Extravíos previos: 1
La salida requerida presenta el siguiente formato:
Ana (28111222) debe pagar: $5
Luis (29333444) debe pagar: $7
Carla (30555666) debe pagar: $5
Diego (27888999) debe pagar: $9
Sofía (31000111) debe pagar: $7
Monto total recaudado: $33
Cantidad de carnets por reposición: 3

Nuevo Requerimiento:
Se solicita implementar el método polimórfico tiempoEmision() (en minutos) en la jerarquía de solicitudes:
Clase base ( mSolicitud ): retorna un tiempo base de 10 minutos por gestión administrativa.
Carnet Nuevo ( mNuevo ): parte del tiempo base, pero si la cédula del estudiante es mayor a 30000000 (nuevo ingreso reciente), suma 5
minutos por validación de expediente.
Reposición por Extravío ( mReposicion ): parte del tiempo base y suma 4 minutos por cada extravío previo reportado.
Actualización en mCarnetizacion : Reportar el tiempo de emisión de cada solicitud, el tiempo total de emisión de la jornada y el promedio de minutos
por trámite.
Salida esperada del nuevo requerimiento:

Ana (28111222) -> Tiempo de emisión: 10 min
Luis (29333444) -> Tiempo de emisión: 14 min
Carla (30555666) -> Tiempo de emisión: 15 min
Diego (27888999) -> Tiempo de emisión: 18 min
Sofía (31000111) -> Tiempo de emisión: 14 min
Tiempo total de emisión: 71 min
Promedio de emisión por trámite: 14.2 min