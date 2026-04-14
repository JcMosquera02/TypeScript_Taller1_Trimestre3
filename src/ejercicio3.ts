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
            console.log(`Push: ${notificacion.dispositivoId} | Título: ${notificacion.titulo}`)
            console.log(`Payload:`, notificacion.payload)
            break
    }
}