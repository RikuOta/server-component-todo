import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
export async function GET(request: Request) {
  const data = await prismaClient.todo.findMany({});
  return new Response(JSON.stringify(data))
}

export type Todo = {
  id: number
  name: string,
  status: TodoStatus
}

export async function POST(request: Request) {
  const body = await request.json()

  await prismaClient.todo.create({
    data: {
      name: body.name,
      status: "todo"
    }
  });

  return new Response('ok')
}


export type TodoStatus = "done" | "todo"
