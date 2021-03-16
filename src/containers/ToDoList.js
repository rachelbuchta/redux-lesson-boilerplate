import React from 'react'
import ToDo from '../containers/ToDo'
import { connect } from 'react-redux'
import { showAll, showActive, showCompleted } from '../actions'

const ToDoList = ({todos, showAll, showActive, showCompleted, clicked, active, completed}) => {
  
  const createTodos = (todo) => {
    return (
      <ToDo 
       key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
      />
    )
}

  const displayTodos = () => {
    if (clicked === 'all') {
      return todos.map(todo => createTodos(todo))
    } else if (clicked === 'active') {
      return active.map(todo => createTodos(todo))
    } else if (clicked === 'completed') {
      return completed.map(todo => createTodos(todo))
    } 
  }

  return (
    <>
      <section>
        <button onClick={()=>showAll()}>Show All</button>
        <button onClick={()=>showActive()}>Show Active</button>
        <button onClick={()=>showCompleted()}>Show Completed</button>
      </section>
      <ul>
        {displayTodos()}
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
