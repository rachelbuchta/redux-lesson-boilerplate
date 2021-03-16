import React from 'react'
import { connect } from 'react-redux'
import { showAll } from '../actions'
import ToDo from '../containers/ToDo'

const ToDoList = ({todos, showAll}) => {
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
        <button onClick={()=>showAll()}>Show All</button>
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
  todos: state.todos.todos
})

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch( showAll() )
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
