const initialState = {
  todos: [],
  active: [],
  completed: [],
  clicked: 'all'
}


export const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        // ...state,
        todos: [...state.todos, {id: Date.now(), text: action.todo, completed: false}]
      }
    case 'TOGGLE_TODO':
      const updateTodos = state.todos.map(todo => {
        if(todo.id === action.id) {
          todo.completed = !todo.completed
        }
      return todo
      })
      return {
        // ...state,
        todos: updateTodos
      }
    case 'SHOW_ALL':
      return {
        todos: [...state.todos],
        clicked: 'all'
      }
      default:
        return state
  }
}