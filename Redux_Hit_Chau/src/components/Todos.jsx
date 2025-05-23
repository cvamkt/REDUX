import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <h2>
        Todos
      </h2>
      <ul className='list-none'>
        {todos.map((todo) => (
          <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded '
            key={todo.id}>

            <div className='text-white'> {todo.text}

            </div>
            <button
            
              onClick={() => dispatch(removeTodo(todo.id))}
              className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded shadow-md'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 '
              
                
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d="M3 6h18M8 6v14a2 2 0 002 2h4a2 2 0 002-2V6M10 11v6M14 11v6M9 4V2h6v2"

                  

                />
              </svg>

            </button>
          </li>
        ))}
      </ul>


    </>
  )
}

export default Todos