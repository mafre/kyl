import { CREATE_CATEGORY, DELETE_CATEGORY } from '../constants/ActionTypes'

const category = (state, action) => {
  switch (action.type)
  {
    case CREATE_CATEGORY:
      return {
        id: action.id,
        label: action.label
      }
      
    default:
      return state
  }
}

const categories = (state = [], action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ]
    case DELETE_CATEGORY:
      return state.filter(category =>
        category.id !== action.id
      )
    default:
      return state
  }
}

export default categories
