import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
// import Header from '../../components/Header'
import UndoList from '../../components/UndoList'

describe('TodoList.vue', () => {
  it('样式改变 做提示', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper).toMatchSnapshot()
  })

  it('初始化的时候， undoList 为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('addUndoItem 被执行， undoList内容增加 1', () => {
    // 监听到 Header 的 add 事件的时候， undoList 增加一个内容
    // 涉及到交互为集成测试
    // const content = 'dell lee'
    // const wrapper = shallowMount(TodoList)
    // const header = wrapper.find(Header)
    // header.vm.$emit('add', content)
    // const undoList = wrapper.vm.$data.undoList
    // expect(undoList).toEqual([content])

    // 单元测试
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'div' },
      { value: 3, status: 'div' },
      { value: 4, status: 'div' }
    ])
  })

  it('调用 UndoList, 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('handleItemDelete 方法被调用时，undoList内容减少 1', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 3, status: 'div' }
    ])
  })

  it('changeItemStatus 方法被调用时，undoList内容显示变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'div' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.changeItemStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'input' },
      { value: 3, status: 'div' }
    ])
  })

  it('resetItemStatus 方法被调用时，undoList内容显示变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'input' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.resetItemStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: 2, status: 'div' },
      { value: 3, status: 'div' }
    ])
  })

  it('changeItemValue 方法被调用时，undoList内容显示变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { value: 1, status: 'div' },
        { value: 2, status: 'input' },
        { value: 3, status: 'div' }
      ]
    })
    wrapper.vm.changeItemValue({
      value: '1234',
      index: 1
    })
    expect(wrapper.vm.$data.undoList).toEqual([
      { value: 1, status: 'div' },
      { value: '1234', status: 'input' },
      { value: 3, status: 'div' }
    ])
  })
})
