import { CREATE_ENTRY, DELETE_ENTRY, CREATE_CATEGORY, DELETE_CATEGORY, SET_AMOUNT } from '../constants/ActionTypes'

let nextEntryId = 0
let nextCategoryId = 0

export const createEntry = (label, categories, amount) => ({
  type: CREATE_ENTRY,
  id: nextEntryId++,
  label,
  categories,
  amount
})

export const deleteEntry = (id) => ({
  type: DELETE_ENTRY,
  id
})

export const createCategory = (label) => ({
  type: CREATE_CATEGORY,
  id: nextCategoryId++,
  label: label
})

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  id
})

export const setAmount = (id, amount) => ({
  type: SET_AMOUNT,
  id,
  amount
})