'use client'

import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import axios from 'axios'

export const AddTodoButton = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleAdd = async () => {
    const input = prompt()
    axios.post('http://localhost:3000/api/todos', {
      name: input,
    })
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <button onClick={handleAdd} className="text-white bg-blue-500 px-6 py-2 rounded-md mb-4">
      {isPending ? 'During addition...' : 'Add Todo'}
    </button>
  )
}
