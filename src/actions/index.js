export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const toggleToDo = id => ({
  type: 'TOGGLE_TODO',
  id
})