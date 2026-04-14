type TipoTransaccion = "ingreso" | "egreso";

interface Transaccion {
    monto: number;
    tipo: TipoTransaccion;
    categoria: string;
}

type ResumenPorTipo = Record<TipoTransaccion, number>;

function agruparPorTipo(transacciones: Transaccion[]): ResumenPorTipo {
    const resumen: ResumenPorTipo = { ingreso: 0, egreso: 0 };

    for (const transaccion of transacciones) {
        if (transaccion.monto < 0) {
            throw new Error(
                `Monto inválido en categoría "${transaccion.categoria}": el monto no puede ser negativo.`
            );
        }
        resumen[transaccion.tipo] += transaccion.monto;
    }

    return resumen;
}

const transacciones: Transaccion[] = [
    { monto: 3000000, tipo: "ingreso", categoria: "Salario" },
    { monto: 500000, tipo: "ingreso", categoria: "Freelance" },
    { monto: 800000, tipo: "egreso", categoria: "Arriendo" },
    { monto: 150000, tipo: "egreso", categoria: "Servicios" },
    { monto: 200000, tipo: "egreso", categoria: "Mercado" },
    { monto: 120000, tipo: "ingreso", categoria: "Venta de curso" },
    { monto: 60000, tipo: "egreso", categoria: "Transporte" },
];

const resultado = agruparPorTipo(transacciones);

console.log("=== Transacciones ingresadas ===");
console.table(transacciones);

console.log("\n=== Resumen agrupado por tipo ===");
console.log(resultado);

console.log(`\nTotal ingresos : $${resultado.ingreso.toLocaleString("es-CO")}`);
console.log(`Total egresos  : $${resultado.egreso.toLocaleString("es-CO")}`);
console.log(
    `Balance neto: $${(resultado.ingreso - resultado.egreso).toLocaleString("es-CO")}`
);
