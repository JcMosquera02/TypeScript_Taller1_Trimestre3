type Categoria = "alimentos" | "tecnología" | "papelería";

interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: Categoria;
}

function tieneBajoStock(producto: Producto): boolean {
    const reglas: Record<Categoria, number> = {
        alimentos: 20,
        tecnología: 5,
        papelería: 50
    };
    return producto.cantidad < reglas[producto.categoria];
}