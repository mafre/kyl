import categories from './categories'

describe('categories reducer', () => {
  it('should handle initial state', () => {
    expect(
      categories(undefined, {})
    ).toEqual([])
  })

  it('should handle CREATE_CATEGORY', () => {
    expect(
      categories([],
      {
        type: 'CREATE_CATEGORY',
        id: 0,
        label: "label"
      })
    ).toEqual([
      {
        id: 0,
        label: "label"
      }
    ])
  })

  it('should handle DELETE_CATEGORY', () => {
    expect(
      categories(
      [{
        id: 0,
        label: "label"
      }], 
      {
        type: 'DELETE_CATEGORY',
        id: 0
      })
    ).toEqual([])
  })
})
