import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList'
import { findTestWrapper } from '../../../../utils/testUtils'

describe('UndoList.vue', () => {
  // it('UndoList 样式改变 做提示', () => {
  //   const wrapper = shallowMount(UndoList)
  //   expect(wrapper).toMatchSnapshot()
  // })

  it('传入 参数为 [1, 2, 3], count 值应该为 3，且列表有内容，且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'delete-button')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toBe(3)
    expect(deleteButtons.length).toBe(3)
  })

  it('删除按钮被点击时 向外触发事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })

  it('列表项目被点击 向外 status 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'div' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const itemOne = findTestWrapper(wrapper, 'item').at(1)
    itemOne.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
    expect(wrapper.emitted().status[0][0]).toBe(1)
  })

  it('列表项目显示一个输入框 两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const inputItems = findTestWrapper(wrapper, 'input')
    expect(inputItems.at(0).element.value).toBe('2')
    expect(inputItems.length).toBe(1)
  })

  it('input 失去焦点时触发  reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 2, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const inputElem = findTestWrapper(wrapper, 'input').at(0)
    inputElem.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('输入框变化 时触发  change 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { value: 1, status: 'div' },
          { value: 123, status: 'input' },
          { value: 3, status: 'div' }
        ]
      }
    })
    const inputElem = findTestWrapper(wrapper, 'input').at(0)
    inputElem.trigger('change')
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: '123',
      index: 1
    })
  })
})
