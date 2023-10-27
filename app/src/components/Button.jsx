import React from 'react'

export default function Button({ name, customClass, variants, type }) {
  const style = {
    gray: 'bg-gray text-gray-dark/60',
    purple: 'bg-purple text-white',
  }
  return (
    <button
      type={type}
      className={`w-full rounded-[10px] px-4 py-2.5 text-sm font-medium ${style[variants]} ${customClass}`}
    >
      {name}
    </button>
  )
}
