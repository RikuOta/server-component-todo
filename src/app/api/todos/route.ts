
import { setTimeout } from "timers/promises";

export async function GET(request: Request) {
  await setTimeout(10000)

  const todos = [ {
    id: 1,
    name: "book",
    status: "done"
  }, {
    id: 2,
    name: "meat",
    status: "done"
  }] as const
  return new Response(JSON.stringify(todos))
}

export type Todo = {
  id: number
  name: string,
  status: TodoStatus
}


export type TodoStatus = "done"
