import React from 'react'

type TodoItemProps = {
    id: string
    title: string
    complete: Boolean
}

const TodoItem = ({id, title, complete}: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-container">
        <input id={id} type="checkbox" className='cursor-pointer peer' />
        <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
    </li>
  )
}

export default TodoItem