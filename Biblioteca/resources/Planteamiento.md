BIBLIOTECA DIGITAL Y PRÉSTAMO DE EQUIPOS
Enunciado (guía de herencia)

En el módulo de gestión de préstamos de recursos académicos (clase mayor: MBiblioteca) se registran las entregas de material (clase menor base: MRecurso), conociendo el código de préstamo, el nombre del estudiante y los días de retraso en la devolución (todo retraso genera una multa base de $1 por cada día de mora). Se gestionan dos tipos de recursos especializados:

Libro Físico (MLibro): el préstamo es gratuito si no hay retraso; si hay retraso y el ejemplar es de colección de reserva, suma $0.50 por cada día de mora a la multa base.
Tablet / Lector E-Book (MTablet): tiene un costo fijo de seguro de $3 por préstamo; si se entrega con retraso, suma a la multa base una penalización fija de $4 por bloqueo administrativo del dispositivo.

Se requiere calcular el monto total a pagar por cada préstamo, el total recaudado por la biblioteca, la cantidad de préstamos que tuvieron retraso y el porcentaje de préstamos de Tablets.

Datos de entrada:

Código	Estudiante	Tipo	Días de retraso	Reserva
P01	Mario	Libro	3	Sí
P02	Sara	Tablet	0	—
P03	Kevin	Tablet	2	—
P04	Elena	Libro	0	No

Salida requerida:

Préstamo P01 (Mario): $4.50
Préstamo P02 (Sara): $3.00
Préstamo P03 (Kevin): $9.00
Préstamo P04 (Elena): $0.00
Total recaudado: $16.50
Cantidad de préstamos con retraso: 2
Porcentaje de préstamos de Tablets: 50%
Nuevo requerimiento: polimorfismo

Se solicita implementar el método polimórfico puntosReputacion() (variación en el historial del estudiante) en la jerarquía de recursos:

Clase base (MRecurso): otorga +10 puntos si no hay días de retraso; en caso contrario, penaliza con -5 puntos por cada día de mora.
Libro Físico (MLibro): utiliza el puntaje base, pero si hubo retraso y el ejemplar es de colección de reserva, duplica la penalización negativa.
Tablet / Lector E-Book (MTablet): suma +5 puntos extra al puntaje base si se devuelve sin retraso; si presenta retraso, resta 10 puntos adicionales a la penalización base.

Actualización en MBiblioteca: reportar la variación de puntos de reputación de cada préstamo y el balance neto de puntos de la biblioteca.

Salida esperada del nuevo requerimiento:

Préstamo P01 (Mario) -> Reputación: -30 pts
Préstamo P02 (Sara) -> Reputación: +15 pts
Préstamo P03 (Kevin) -> Reputación: -20 pts
Préstamo P04 (Elena) -> Reputación: +10 pts
Balance neto de reputación: -25 pts