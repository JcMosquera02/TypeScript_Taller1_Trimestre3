type Unidad = "cm" | "m" | "km";

const aMetros: Record<Unidad, number> = {
    cm: 0.01,
    m: 1,
    km: 1000,
};

function convertirUnidad(
    valor: number,
    desde: Unidad,
    hasta: Unidad
): number {
    if (valor < 0) {
        throw new Error("El valor no puede ser negativo.");
    }

    const valorEnMetros = valor * aMetros[desde];
    const resultado = valorEnMetros / aMetros[hasta];
    return parseFloat(resultado.toFixed(6));
}
console.log(`100 cm a m  : ${convertirUnidad(100, "cm", "m")}  m`);
console.log(` 5 km a cm : ${convertirUnidad(5, "km", "cm")} cm`);
console.log(` 1 m a km : ${convertirUnidad(1, "m", "km")} km`);
console.log(`250 cm a km : ${convertirUnidad(250, "cm", "km")} km`);
