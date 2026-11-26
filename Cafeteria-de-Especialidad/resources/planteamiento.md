CAFETERÍA DE ESPECIALIDAD
Planteamiento base (herencia)

Enunciado reconstruido a partir de la hoja de análisis del equipo. Compáralo con el de la guía de herencia y corrígelo si difiere.

En una cafetería de especialidad (clase mayor: MCafeteria) se registran las bebidas vendidas (clase menor base: MBebida), de las cuales se conoce el nombre, el precio base y el tipo. Existen dos tipos de bebidas especializadas:

Café Caliente (MCafeCaliente): si se prepara con leche vegetal, suma un recargo de $0.75 al precio base; de lo contrario paga el precio base.
Bebida Fría / Frappé (MBebidaFria): si es de tamaño grande, suma un recargo del 20% sobre el precio base; de lo contrario paga el precio base.

Requerimientos:

R.1: Monto total de ventas.
R.2: Cantidad de bebidas con precio mayor a $4.
R.3: Nombre de la bebida y su precio.

Datos de entrada:

Nombre	Precio base	Tipo	Leche vegetal	Grande	Monto total
Latte	3	caliente	sí	no	3.75
Frappe Mocha	4	fría	no	sí	4.80
Americano	2.50	caliente	no	no	2.50
Matcha Helado	4.50	fría	no	no	4.50

Salida requerida:

Latte: $3.75
Frappe Mocha: $4.80
Americano: $2.50
Matcha Helado: $4.50
Monto total de ventas: $15.55
Bebidas con precio mayor a $4: 2
Nuevo requerimiento (polimorfismo)

Se solicita implementar el método polimórfico gramosAzucar() (contenido estimado en gramos) en la jerarquía de bebidas:

Clase base (MBebida): aporta 10 gramos base de endulzante o jarabe estándar.
Café Caliente (MCafeCaliente): reduce a la mitad los gramos base si se prepara con leche vegetal; de lo contrario mantiene los gramos base.
Bebida Fría / Frappé (MBebidaFria): suma 12 gramos adicionales a los gramos base por la mezcla fría; además, si es tamaño grande, incrementa ese subtotal en un 20%.

Actualización en MCafeteria: reportar los gramos de azúcar de cada bebida y el promedio de gramos de azúcar por bebida vendida.

Salida esperada del nuevo requerimiento:

Latte -> Azúcar: 5.00 g
Frappé Mocha -> Azúcar: 26.40 g
Americano -> Azúcar: 10.00 g
Matcha Helado -> Azúcar: 22.00 g
Promedio de azúcar por bebida: 15.85 g