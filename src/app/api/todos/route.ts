
import { setTimeout } from "timers/promises";

const todos = [{
  id: 1,
  name: 'book',
  status: 'done'
}, {
  id: 2,
  name: 'meat',
  status: 'done'
}]

export async function GET(request: Request) {
  await setTimeout(1000)
  return new Response(JSON.stringify(todos))
}

export type Todo = {
  id: number
  name: string,
  status: TodoStatus
}

export async function POST(request: Request) {
  await setTimeout(1000)

  const body = await request.json()

  const maxId = Math.max(...todos.map(todo => todo.id))
  todos.push({
    id: maxId + 1,
    name: body.name,
    status: "todo"
  } as Todo) 

  return new Response('ok')
}


export type TodoStatus = "done" | "todo"
