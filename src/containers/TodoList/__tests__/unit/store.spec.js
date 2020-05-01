import store from '../../../../store'

describe('store', () => {
  it('当 store 接收 changeInputValue, inputValue 发生变化', () => {
    const payload = '123'
    store.commit('changeInputValue', payload)
    expect(store.state.inputValue).toBe(payload)
  })
})
