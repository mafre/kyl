import { CREATE_ENTRY, DELETE_ENTRY, DELETE_CATEGORY, SET_AMOUNT } from '../constants/ActionTypes'

const entry = (state, action) => {
  switch (action.type)
  {
    case CREATE_ENTRY:
      return {
        id: action.id,
        label: action.label,
        categories: action.categories,
        amount: action.amount
      }

    default:
      return state
  }
}

const entries = (state = [], action) => {
  switch (action.type) {

    case CREATE_ENTRY:
      return [
        ...state,
        entry(undefined, action)
      ]

    case DELETE_ENTRY:
      return state.filter(entry =>
        entry.id !== action.id
      )

    case DELETE_CATEGORY:
      for(var aEntry of state)
      {
        aEntry.categories = aEntry.categories.filter(aCategoryId =>
          aCategoryId !== action.id
        )
      }

      return state

    case SET_AMOUNT:
      return state.map(aEntry =>
      {
        if(aEntry.id === action.id)
        {
          aEntry.amount = action.amount
        }
        return aEntry
      })

    default:
      return state
  }
}

export default entries
