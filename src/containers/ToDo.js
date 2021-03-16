import React from 'react'
import { toggleToDo, removeToDo } from '../actions'
import { connect } from 'react-redux'

const ToDo = ({ id, text, completed, toggleToDo, removeToDo }) => {

  return (
    <>
    <button onClick={() => removeToDo(id)}>X</button>
    <li 
      onClick={()=>toggleToDo(id)}
      className={completed ? 'completed' : 'not-completed'}
    >
      {text}
    </li>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch( toggleToDo(id) ),
  removeToDo: id => dispatch( removeToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo)