import { mount } from 'enzyme'
import React from 'react'

import { Button } from '../src/Button'

describe('src/index', () => {
  it('should render properly: type#primary', () => {
    const wrapper = mount(
      <Button type="primary" size="small">
        test
      </Button>
    )
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-primary').length).toBe(1)
    expect(wrapper.find('.or-btn-small').length).toBe(1)
  })

  it('should render properly: type#warning', () => {
    const wrapper = mount(<Button type="warning">test</Button>)
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-warning').length).toBe(1)
  })

  it('simulates click events', () => {
    const mockCallBack = jest.fn()
    const wrapper = mount(
      <Button onClick={mockCallBack} type="primary" size="small">
        test
      </Button>
    )
    wrapper.find('.or-btn').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })
})
