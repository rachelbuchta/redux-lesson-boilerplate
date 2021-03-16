import React from 'react'
import { connect } from 'react-redux'
import { showAll, showActive, showCompleted } from '../actions'
import ToDo from '../containers/ToDo'

const ToDoList = ({todos, showAll, showActive, showCompleted}) => {
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
        <button onClick={()=>showActive()}>Show Active</button>
        <button onClick={()=>showCompleted()}>Show Completed</button>
      </section>
      <ul>
        {displayTodos}
      </ul>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  active: state.todos.active,
  completed: state.todos.completed,
  clicked: state.todos.clicked
})

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch( showAll() ),
  showActive: () => dispatch( showActive() ),
  showCompleted: () => dispatch( showCompleted() )
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
