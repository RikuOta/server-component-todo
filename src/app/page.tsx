import { Inter } from 'next/font/google'
import {Todo} from "src/app/api/todos/route";
import React, {Suspense} from "react";

const inter = Inter({ subsets: ['latin'] })

const TodoPage = async () =>  {

  return (
    <div className="text-2xl">
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
  return <ul>
    {(await data.json()).map((item: Todo) =>
      <li key={item.id}>
        {item.name}
      </li>
    )}
  </ul>
}

export default TodoPage

