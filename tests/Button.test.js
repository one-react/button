import React from 'react'
import { mount } from 'enzyme'

import Button from '../src/Button'

const wrapper = mount(<Button type='primary' small>test</Button>)
const wrapper1 = mount(<Button type='warning'>test</Button>)

describe('src/index', () => {
  it('should render properly', () => {
    expect(wrapper.find('.or-btn').length).toBe(1)
    expect(wrapper.find('.or-btn-primary').length).toBe(1)
    expect(wrapper.find('.or-btn-small').length).toBe(1)
  });

  it('should render properly', () => {
    expect(wrapper1.find('.or-btn').length).toBe(1)
    expect(wrapper1.find('.or-btn-warning').length).toBe(1)
  });

  it('simulates click events', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount((
      <Button onClick={mockCallBack} type='primary' small>test</Button>
    ));
    wrapper.find('.or-btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })

})
