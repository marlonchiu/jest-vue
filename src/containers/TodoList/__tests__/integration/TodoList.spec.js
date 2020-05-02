import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../TodoList.vue'
import store from '../../../../store'
import axios from '../../__mocks__/axios'

beforeEach(() => {
  jest.useFakeTimers()
})

// it(`
//     1.用户会在header 输入框输入内容
//     2.用户会点击回车按钮
//     3.列表项应该增加用户输入内容的列表项
//   `, (done) => {
//   const wrapper = mount(TodoList, {
//     store
//   })
//   const headerInput = findTestWrapper(wrapper, 'header-input').at(0)
//   const content = 'Dell Lee'
//   // 模拟用户的行为
//   headerInput.setValue(content)
//   headerInput.trigger('change')
//   headerInput.trigger('keyup.enter')
//   const listItems = findTestWrapper(wrapper, 'list-item')
//   console.log(listItems)
//   expect(listItems.length).toBe(1)
//     expect(listItems.at(0).text()).contains(content)
//     done()
// })

// it(`
//     1.用户进入页面，请求远程数据
//     2.列表应该展示返回的数据
//   `, () => {
//   const wrapper = mount(TodoList, {
//     store
//   })

//   wrapper.vm.$nextTick(() => {
//     const listItems = findTestWrapper(wrapper, 'list-item')
//     expect(listItems.length).toBe(2)
//   })
// })

it(`
    1.用户进入页面，请求远程数据失败
    2.页面应该展示错误
  `, (done) => {
  axios.success = false
  const wrapper = mount(TodoList, {
    store
  })

  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(0)
    done()
  })
})
