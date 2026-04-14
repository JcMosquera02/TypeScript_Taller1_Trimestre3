interface CampoFormulario {
    nombre: string
    tipo: "texto" | "numero" | "email"
    valor: string | number
}

function esEmailValido(valor: string): boolean {
    const partes = valor.split("@")
    const dominio = partes[1]
    return partes.length === 2 &&
           !valor.includes(" ") &&
           partes[0] !== "" &&
           dominio !== undefined &&
           dominio.includes(".")
}

function validarCampos(campos: CampoFormulario[]): string[] {
    return campos
        .filter(campo => {
            switch (campo.tipo) {
                case "texto":
                    return typeof campo.valor !== "string" || campo.valor.trim() === ""
                case "numero":
                    return typeof campo.valor !== "number" || isNaN(campo.valor as number)
                case "email":
                    return typeof campo.valor !== "string" || !esEmailValido(campo.valor)
            }
        })
        .map(campo => campo.nombre)
}