import React from 'react'
import { connect } from 'react-redux'
import ToDo from '../containers/ToDo'

const ToDoList = ({todos}) => {
  const displayTodos = todos.map(todo => {
    return (
      <ToDo 
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <>
      <section>
        <button>Show All</button>
        <button>Show Active</button>
        <button>Show Completed</button>
      </section>
      <ul>
        {displayTodos}
      </ul>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)
