import { mount } from 'enzyme'
import React from 'react'

import Button from '../src'

describe('src/index', () => {
  it('should render properly: type#default', () => {
    const wrapper = mount(generateButton({}, 'default'))
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-default').length).toBe(1)
  })

  it('should render properly: type#primary', () => {
    const wrapper = mount(
      generateButton(
        {
          type: 'primary'
        },
        'primary'
      )
    )
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-primary').length).toBe(1)
  })

  it('should render properly: type#warning', () => {
    const wrapper = mount(
      generateButton(
        {
          type: 'warning'
        },
        'warning'
      )
    )
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-warning').length).toBe(1)
  })

  it('should render properly: size#default', () => {
    const wrapper = mount(generateButton({}, 'default size'))
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-size-default').length).toBe(1)
  })

  it('should render properly: size#small', () => {
    const wrapper = mount(
      generateButton(
        {
          size: 'small'
        },
        'small size'
      )
    )
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-size-small').length).toBe(1)
  })

  it('should render properly: size#large', () => {
    const wrapper = mount(
      generateButton(
        {
          size: 'large'
        },
        'large size'
      )
    )
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-size-large').length).toBe(1)
  })

  it('should render properly: className', () => {
    const wrapper = mount(
      generateButton(
        {
          className: 'hello'
        },
        'addtion className'
      )
    )
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn').hasClass('hello')).toBe(true)
  })

  it('simulates click events', () => {
    const mockCallBack = jest.fn()
    const wrapper = mount(
      generateButton(
        {
          onClick: mockCallBack
        },
        'click test'
      )
    )
    wrapper.find('.or-btn').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('simulates disabled button click events', () => {
    const mockCallBack = jest.fn()
    const wrapper = mount(
      generateButton(
        {
          disabled: true,
          onClick: mockCallBack
        },
        'click test'
      )
    )
    wrapper.find('.or-btn').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(0)
  })
})

function generateButton(options, text) {
  return <Button {...options}>text</Button>
}
