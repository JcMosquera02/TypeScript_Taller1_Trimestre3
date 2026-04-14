type TipoCambio = "nombre" | "correo" | "contrasena"

type CambioUsuario = {
    tipo: TipoCambio
    valorAnterior: string
    valorNuevo: string
    fecha: Date
}

type ResumenCambios = Record<TipoCambio, number>

function resumirCambios(cambios: CambioUsuario[]): ResumenCambios {
    const resultado: ResumenCambios = {
        nombre: 0,
        correo: 0,
        contrasena: 0
    }

    for (const cambio of cambios) {
        resultado[cambio.tipo]++
    }

    return resultado
}