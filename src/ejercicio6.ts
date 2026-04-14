type Categoria = "tareas" | "quices" | "examen"

interface Calificacion {
    estudianteId: number
    materia: string
    categoria: Categoria
    nota: number
}

type PromedioCategoria = Record<Categoria, number>

function promedioPorCategoria(calificaciones: Calificacion[], estudianteId: number): PromedioCategoria {
    const resultado: PromedioCategoria = {
        tareas: 0,
        quices: 0,
        examen: 0
    }

    const conteo: Record<Categoria, number> = {
        tareas: 0,
        quices: 0,
        examen: 0
    }

    for (const c of calificaciones) {
        if (c.estudianteId === estudianteId) {
            resultado[c.categoria] += c.nota
            conteo[c.categoria]++
        }
    }

    // calcular promedios
    for (const categoria of ["tareas", "quices", "examen"] as Categoria[]) {
        if (conteo[categoria] > 0) {
            resultado[categoria] = resultado[categoria] / conteo[categoria]
        } else {
            resultado[categoria] = 0
        }
    }

    return resultado
}