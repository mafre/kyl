import entries from './entries'

describe('entries reducer', () => {
  it('should handle initial state', () => {
    expect(
      entries(undefined, {})
    ).toEqual([])
  })

  it('should handle CREATE_ENTRY', () => {
    expect(
      entries([],
      {
        type: 'CREATE_ENTRY',
        id: 0,
        label: "label",
        categories: [0],
        amount: 1
      })
    ).toEqual([
      {
        id: 0,
        label: "label",
        categories: [0],
        amount: 1
      }
    ])
  })

  it('should handle DELETE_ENTRY', () => {
    expect(
      entries(
      [{
        id: 0,
        label: "label",
        categories: [0],
        amount: 1
      }], 
      {
        type: 'DELETE_ENTRY',
        id: 0
      })
    ).toEqual([])
  })

  it('should handle DELETE_CATEGORY', () => {
    expect(
      entries(
      [{
        id: 0,
        label: "label",
        categories: [0],
        amount: 1
      }], 
      {
        type: 'DELETE_CATEGORY',
        id: 0
      })
    ).toEqual([])
  })

  it('should handle SET_AMOUNT', () => {
    expect(
      entries(
      [{
        id: 0,
        label: "label",
        categories: [0],
        amount: 1
      }], 
      {
        type: 'SET_AMOUNT',
        id: 0,
        amount: 10
      })
    ).toEqual([
      {
        id: 0,
        label: "label",
        categories: [0],
        amount: 10
      }
    ])
  })
})
