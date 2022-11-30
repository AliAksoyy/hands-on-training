import React from 'react'

interface ITodoList {
    todos:TodoType[]
}

const TodoList:React.FC<ITodoList>= ({todos}) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList