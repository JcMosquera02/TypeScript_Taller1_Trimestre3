type Taskstatus = "pendiente" |"en_progreso"|"finalizada"

interface Task {
    id: number,
    descripcion: string,
    isComplete:boolean,
    status: Taskstatus
}

function getPendingAndProgressTasks(tasks:Task[]): Task[]{
    return tasks.filter((task)=> task.status!="finalizada");
}