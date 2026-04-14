interface PagoTarjeta {
    metodo: "tarjeta";
    numeroTarjeta: string;
    cvv: string;
}

interface PagoTransferencia {
    metodo: "transferencia";
    banco: string;
    numeroCuenta: string;
}

interface PagoEfectivo {
    metodo: "efectivo";
}

type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

interface ResultadoValidacion {
    valido: boolean;
    errores: string[];
}

function validarPago(pago: Pago): ResultadoValidacion {
    const errores: string[] = [];

    switch (pago.metodo) {
        case "tarjeta":
            if (!pago.numeroTarjeta?.trim())
                errores.push("El número de tarjeta es obligatorio.");
            if (!pago.cvv?.trim())
                errores.push("El CVV es obligatorio.");
            if (pago.numeroTarjeta && !/^\d{13,19}$/.test(pago.numeroTarjeta))
                errores.push("El número de tarjeta debe tener entre 13 y 19 dígitos.");
            if (pago.cvv && !/^\d{3,4}$/.test(pago.cvv))
                errores.push("El CVV debe tener 3 o 4 dígitos.");
            break;

        case "transferencia":
            if (!pago.banco?.trim())
                errores.push("El banco es obligatorio.");
            if (!pago.numeroCuenta?.trim())
                errores.push("El número de cuenta es obligatorio.");
            break;

        case "efectivo":
            break;
    }

    return { valido: errores.length === 0, errores };
}

const pagoTarjetaOk: Pago = {
    metodo: "tarjeta",
    numeroTarjeta: "4111111111111111",
    cvv: "123",
};

const pagoTarjetaMal: Pago = {
    metodo: "tarjeta",
    numeroTarjeta: "",
    cvv: "99X",
};

const pagoTransferencia: Pago = {
    metodo: "transferencia",
    banco: "Bancolombia",
    numeroCuenta: "123456789",
};

const pagoTransferenciaMal: Pago = {
    metodo: "transferencia",
    banco: "",
    numeroCuenta: "",
};

const pagoEfectivo: Pago = { metodo: "efectivo" };

console.log("Tarjeta válida :", validarPago(pagoTarjetaOk));
console.log("Tarjeta inválida :", validarPago(pagoTarjetaMal));
console.log("Transferencia válida:", validarPago(pagoTransferencia));
console.log("Transferencia mal :", validarPago(pagoTransferenciaMal));
console.log("Efectivo:", validarPago(pagoEfectivo));