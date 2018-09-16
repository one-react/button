import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src'

import './index.scss'

const handleClick = action('button-click')
storiesOf('OR-Button', module)

  .add('button type', () => (
    <div className='type'>
      <Button type='primary' onClick={handleClick}>ADD TO CART</Button>
      <Button onClick={handleClick}>SIGN UP</Button>
      <Button type='warning' onClick={handleClick}>DELETE</Button>
      <Button type='primary' disabled onClick={handleClick}>DISABLED</Button>
    </div>
  ))
  .add('button size', () => (
    <div className='size'>
      <h1>small:</h1>
      <div className='small'>
        <Button type='primary' small onClick={handleClick}>ADD TO CART</Button>
        <Button small onClick={handleClick}>SIGN UP</Button>
        <Button type='warning' small onClick={handleClick}>DELETE</Button>
        <Button type='primary' disabled small onClick={handleClick}>DISABLED</Button>
      </div>
      <h1>normal:</h1>
      <div className='normal'>
        <Button type='primary' onClick={handleClick}>ADD TO CART</Button>
        <Button onClick={handleClick}>SIGN UP</Button>
        <Button type='warning' onClick={handleClick}>DELETE</Button>
        <Button type='primary' disabled onClick={handleClick}>DISABLED</Button>
      </div>
      <h1>large:</h1>
      <div className='large'>
        <Button type='primary' large onClick={handleClick}>ADD TO CART</Button>
        <Button large onClick={handleClick}>SIGN UP</Button>
        <Button type='warning' large onClick={handleClick}>DELETE</Button>
        <Button type='primary' disabled large onClick={handleClick}>DISABLED</Button>
      </div>
    </div>
  ))
