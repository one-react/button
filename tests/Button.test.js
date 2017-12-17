import React from 'react'
import { mount } from 'enzyme'

import Button from '../src/Button'

const wrapper = mount(<Button type='primary'>test</Button>)

describe('src/index', () => {
  it('should render properlyx', () => {
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('.or-btn').length).toBe(1)
  })
})
