import { Inter } from 'next/font/google'
import {Todo} from "src/app/api/todos/route";
import React, { Fragment, Suspense } from 'react'
import { AddTodoButton } from 'src/app/todos/AddTodoButton'
import { ChangeStatusButton } from 'src/app/todos/ChangeStatusButton'

const inter = Inter({ subsets: ['latin'] })

const TodoPage = async () =>  {
  return (
    <div className="p-6 text-2xl">
      <AddTodoButton />

      <Suspense fallback={<div>loading...2</div>}>
        { /* @ts-ignore */ }
        <TodoList></TodoList>
      </Suspense>
    </div>
  )
}

const TodoList = async () => {
  const data= await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache"
  });
  return <ul className="text-gray-600">
    {(await data.json()).map((item: Todo) =>
      <li key={item.id} className="py-2 border-b border-gray-100">
        <div className="flex justify-between">
          <p>{item.name}</p>
          <ChangeStatusButton />
        </div>
      </li>
    )}
  </ul>
}

export default TodoPage

