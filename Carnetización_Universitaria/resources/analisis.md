CARNETIZACIÓN UNIVERSITARIA

Contexto: Se procesan las solicitudes de identificación (clase mayor: mCarnetizacion ).
De las cuales se conoce la cédula y el nombre del estudiante (clase menor base: mSolicitud ),
sabiendo que todo trámite tiene un costo base de $5.

Existen dos tipos de trámites especializados:
Carnet Nuevo ( mNuevo , que solo paga el costo base)
y Reposición por Extravío ( mReposicion , que además del costo base cobra $2 por cada extravío previo reportado).

Se requiere calcular el monto a pagar por cada solicitud, el monto total recaudado por el departamento y la cantidad de carnets emitidos por reposición.

Requerimientos:
R.a: Calcular el monto a Pagar por cada solicitud.
R.b: El monto total recaudado por el departamento (mNuevo,  mReposicion)
R.c: La Cantidad de Carnets emitidos por reposición.

Ejemplo:
Cedula	Nombre	Tipo	Cont Extravíos previos	Monto Total ContCarnets por reposición
28111222	Ana	    Nuevo		5	0
29333444	Luis	Reposición	1	12	1
30555666	Carla	Nuevo		17	1
27888999	Diego	Reposición	2	26	2
31000111	Sofía	Reposición	1	33	3

Monto total recaudado: $33
Cantidad de carnets por reposición: 3

<<Clase Mayor>> 
MCarnetizacion
---------------------------------------------------------
- acumMontoTotal: number
- contReposiciones: number
---------------------------------------------------------
+ constructor()
+ procesarSolicitud(sol: mSolicitud): void
+ totalRecaudado(): number
+ cantidadReposiciones(): number

<<Superclase / Clase Menor Base>> 
MSolicitud
--------------------------------------------------------- 
# _cedula: number
# _nombre: string
# get _costoBase(): number
---------------------------------------------------------
+ constructor(cedula: number, nombre: string)
+ set/get cedula(): number 
+ set/get nombre(): string
+ calcularMonto(): number
+ esReposicion(): boolean
+ obtenerTipo(): string

  <<Subclase / Hija>> 
MNuevo 
---------------------------------------------------------
(Hereda todo del padre)
---------------------------------------------------------
+ constructor(cedula: number, nombre: string)
+ override obtenerTipo(): string

<<Subclase / Hija>> 
MReposicion 
---------------------------------------------------------
-_cantExtraviosPrevios: number
---------------------------------------------------------
+ constructor(	cedula: number,
			nombre: string,
			cantExtraviosPrevios: number) 
+ override obtenerTipo(): string
+ set/get cantExtraviosPrevios(): number
+ override calcularMonto(): number
+ override esReposicion(): boolean
+ override obtenerTipo(): string 

=========================================================
5. ABSTRACCIÓN DE LA LÓGICA
=========================================================

// 1. Clase Menor Base: mSolicitud
Constructor(cedula, nombre):
    this.cedula = cedula        // Pasa por setter
    this.nombre = nombre        // Pasa por setter

protected get _costoBase():
    return 5

calcularMonto():
    return this._costoBase

esReposicion():
    return false

obtenerTipo():
    return "Solicitud General"

---------------------------------------------------------

// 2. Subclase Hija: mNuevo
Constructor(cedula, nombre):
    super(cedula, nombre)       // Llama al constructor del padre
    // Hereda calcularMonto() (retorna 5) y esReposicion() (retorna false)

override obtenerTipo():
    return "Nuevo"

---------------------------------------------------------

// 3. Subclase Hija: mReposicion
Constructor(cedula, nombre, cantExtraviosPrevios):
    super(cedula, nombre)
    this.cantExtraviosPrevios = cantExtraviosPrevios  // Pasa por setter

override calcularMonto():
    return super.calcularMonto() + (2 * this._cantEextraviosPrevios)

override esReposicion():
    return true

override obtenerTipo():
    return "Reposición"

---------------------------------------------------------

// 4. Clase Mayor: mCarnetizacion
Constructor():
    this.acumMontoTotal = 0
    this.contReposiciones = 0

procesarSolicitud(sol: mSolicitud):
    this.acumMontoTotal += sol.calcularMonto()
    SI (sol.esReposicion() == true) ENTONCES
        this.contReposiciones++

totalRecaudado():
    return this.acumMontoTotal

cantidadReposiciones():
    return this.contReposiciones