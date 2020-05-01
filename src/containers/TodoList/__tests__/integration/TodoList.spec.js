import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../TodoList.vue'
import store from '../../../../store'

describe('TodoList', () => {
  it(`
    1.用户会在header 输入框输入内容
    2.用户会点击回车按钮
    3.列表项应该增加用户输入内容的列表项
    `, () => {
    const wrapper = mount(TodoList, {
      store
    })
    const headerInput = findTestWrapper(wrapper, 'header-input').at(0)
    const content = 'Dell Lee'
    // 模拟用户的行为
    headerInput.setValue(content)
    headerInput.trigger('change')
    headerInput.trigger('keyup.enter')
    const listItems = findTestWrapper(wrapper, 'list-item')
    console.log(listItems)
    expect(listItems.length).toBe(1)
    expect(listItems.at(0).text()).contains(content)
  })
})
