import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
// import Header from '../../components/Header'
import UndoList from '../../components/UndoList'

describe('TodoList.vue', () => {
  it('组件渲染正常', () => {
    // const wrapper = shallowMount(TodoList)
  })

  it('TodoList 初始化的时候， undoList 为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 中 addUndoItem 被执行， undoList内容增加 1', () => {
    // TodoList 监听到 Header 的 add 事件的时候， undoList 增加一个内容
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
      undoList: [1, 2, 3]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
  })

  it('TodoList 调用 UndoList, 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('TodoList 中 handleItemDelete 方法被调用时，undoList内容减少 1', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })
})
