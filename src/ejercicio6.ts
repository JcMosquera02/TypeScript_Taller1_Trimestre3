type Categoria = "tareas" | "quices" | "examen"

interface Calificacion {
    estudianteId: number
    materia: string
    categoria: Categoria
    nota: number
}

type PromedioCategoria = Record<Categoria, number>

function promedioPorCategoria(calificaciones: Calificacion[], estudianteId: number): PromedioCategoria {
    const delEstudiante = calificaciones.filter(c => c.estudianteId === estudianteId)

    const categorias: Categoria[] = ["tareas", "quices", "examen"]

    return categorias.reduce<PromedioCategoria>((acc, categoria) => {
        const notas = delEstudiante
            .filter(c => c.categoria === categoria)
            .map(c => c.nota)

        const promedio = notas.length === 0
            ? 0
            : notas.reduce((sum, n) => sum + n, 0) / notas.length

        return { ...acc, [categoria]: promedio }
    }, { tareas: 0, quices: 0, examen: 0 })
}