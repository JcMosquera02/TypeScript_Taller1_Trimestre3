type TipoTransaccion = "ingreso" | "egreso"

type Transaccion = {
    monto: number
    tipo: TipoTransaccion
    categoria: string
}

function sumarPorTipo(transacciones: Transaccion[]): Record<TipoTransaccion, number> {
    return transacciones.reduce(
        (acc, t) => ({ ...acc, [t.tipo]: acc[t.tipo] + t.monto }),
        { ingreso: 0, egreso: 0 }
    )
}