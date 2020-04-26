import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header'

describe('TodoList.vue', () => {
  it ('组件渲染正常', () => {
    const wrapper = shallowMount(TodoList)
  })

  it ('TodoList 初始化的时候， undoList 为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 监听到 Header 的 add 事件的时候， undoList 增加一个内容', () => {
    const content = 'dell lee'
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    header.vm.$emit('add', content)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([content])
  })
})
