'use client'

import React from 'react'

export const ChangeStatusButton = () => {
  const handleChangeStatus = () => {
    console.log('--------------- test hello')
  }

  return (
    <button onClick={() => handleChangeStatus()} className="text-white bg-blue-500 px-6 py-2 rounded-md">
      Change Status
    </button>
  )
}
