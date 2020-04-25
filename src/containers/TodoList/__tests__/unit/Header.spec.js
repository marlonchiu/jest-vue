import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'

describe('Header.vue', () => {
  it ('Header 包含 input 输入框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    // const textInput = wrapper.find('input[type="text"]')
    expect(input.exists()).toBe(true)
  })

  it ('Header 中 input 输入框初始值为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it ('Header 中 input 输入框发生变化，数据会随着改变', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('some value')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('some value')
  })

  it ('Header 中 input 输入框输入回车 无内容时无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it ('Header 中 input 输入框输入回车 有内容时触发事件，同时清空input', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('some value')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })
})
