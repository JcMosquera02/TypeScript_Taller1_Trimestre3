type EmailNotification = {
    tipo: "email"
    destinatario: string
    asunto: string
    cuerpo: string
}

type SMSNotification = {
    tipo: "sms"
    telefono: string
    mensaje: string
}

type PushNotification = {
    tipo: "push"
    dispositivoId: string
    titulo: string
    payload: Record<string, string>
}

type Notificacion = EmailNotification | SMSNotification | PushNotification

function enviarNotificacion(notificacion: Notificacion): void {
    switch (notificacion.tipo) {
        case "email":
            console.log(`Email: ${notificacion.destinatario} | Asunto: ${notificacion.asunto}`)
            console.log(`Cuerpo: ${notificacion.cuerpo}`)
            break
        case "sms":
            console.log(`SMS: ${notificacion.telefono} | Mensaje: ${notificacion.mensaje}`)
            break
        case "push":
            console.log(`Push: ${notificacion.dispositivoId} | Titulo: ${notificacion.titulo}`)
            console.log(`Payload:`, notificacion.payload)
            break
    }
}

const email1: Notificacion = {
  tipo: "email",
  destinatario: "ana@empresa.com",
  asunto: "Bienvenida al equipo",
  cuerpo: "Hola Ana, nos alegra tenerte con nosotros.",
}

const email2: Notificacion = {
  tipo: "email",
  destinatario: "carlos@gmail.com",
  asunto: "Factura",
  cuerpo: "Adjunto encontraras tu factura del mes de abril.",
}

const sms1: Notificacion = {
  tipo: "sms",
  telefono: "+57 310 123 4567",
  mensaje: "Tu codigo de verificacion es: 849201. Valido por 5 minutos.",
}

const sms2: Notificacion = {
  tipo: "sms",
  telefono: "+1 800 555 0199",
  mensaje: "Tu pedido ha sido despachado.",
}

const push1: Notificacion = {
  tipo: "push",
  dispositivoId: "device-abc-9f3e",
  titulo: "¡Tu pedido llego!",
  payload: {
    pedidoId: "7732",
    estado: "entregado",
  },
}

const push2: Notificacion = {
  tipo: "push",
  dispositivoId: "device-xyz-1a2b",
  titulo: "Oferta especial ",
  payload: {
    descuento: "30%",
    expira: "2026-04-15",
    categoria: "electrodomesticos",
  },
}

enviarNotificacion(email1)
enviarNotificacion(email2)
enviarNotificacion(sms1)
enviarNotificacion(sms2)
enviarNotificacion(push1)
enviarNotificacion(push2)