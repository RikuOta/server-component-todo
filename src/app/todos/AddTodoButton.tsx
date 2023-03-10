'use client'

import React from 'react'
import axios from 'axios'

export const AddTodoButton = () => {
  const handleAdd = async () => {
    const input = prompt()
    axios.post('http://localhost:3000/api/todos', {
      name: input,
    })
  }

  return (
    <button onClick={() => handleAdd()} className="text-white bg-blue-500 px-6 py-2 rounded-md mb-4">
      Add Todo
    </button>
  )
}
