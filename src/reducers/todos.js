export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {id: Date.now(), text: action.todo, completed: false}
      ]
    case 'TOGGLE_TODO':
      state.todos.map(todo => {
        if(todo.id === action.id) {
          todo.completed = !todo.completed
        }
      return todo
      })
      default:
        return state
  }
}