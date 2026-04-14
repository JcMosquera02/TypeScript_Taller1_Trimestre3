interface Usuario {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: "admin" | "editor" | "visitante";
}

function filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(
        (u) => u.edad >= 18 && u.activo && u.rol !== "visitante"
    );
}
const usuarios: Usuario[] = [
    { nombre: "Ana", edad: 25, activo: true, rol: "admin" },
    { nombre: "Luis", edad: 17, activo: true, rol: "editor" },
    { nombre: "Marta", edad: 30, activo: false, rol: "editor" },
    { nombre: "Pedro", edad: 22, activo: true, rol: "visitante" },
    { nombre: "Sofía", edad: 19, activo: true, rol: "editor" },
];
console.log(filtrarUsuarios(usuarios));