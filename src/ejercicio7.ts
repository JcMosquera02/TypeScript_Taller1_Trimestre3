type Categoria = "alimentos" | "tecnologia" | "papeleria"

interface Producto {
    id: number
    nombre: string
    cantidad: number
    categoria: Categoria
}

function tieneBajoStock(producto: Producto): boolean {
    if (producto.categoria === "alimentos") {
        return producto.cantidad < 20
    }

    if (producto.categoria === "tecnologia") {
        return producto.cantidad < 5
    }

    if (producto.categoria === "papeleria") {
        return producto.cantidad < 50
    }

    return false
}