type TipoCambio = "nombre" | "correo" | "contrasena"

type CambioUsuario = {
    tipo: TipoCambio
    valorAnterior: string
    valorNuevo: string
    fecha: Date
}

type ResumenCambios = Record<TipoCambio, number>

function resumirCambios(cambios: CambioUsuario[]): ResumenCambios {
    return cambios.reduce<ResumenCambios>(
        (acc, cambio) => ({ ...acc, [cambio.tipo]: acc[cambio.tipo] + 1 }),
        { nombre: 0, correo: 0, contrasena: 0 }
    )
}