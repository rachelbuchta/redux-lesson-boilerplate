import React from 'react'
import { toggleToDo } from '../actions'
import { connect } from 'react-redux'

const ToDo = ({ id, text, completed, toggleToDo }) => {

  return (
    <li 
      onClick={()=>toggleToDo(id)}
      className={completed ? 'completed' : 'not-completed'}
    >
      {text}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleToDo: id => dispatch( toggleToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo)