import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src'

const handleClick = action('button-click')
storiesOf('OR-Button', module)

  .add('button primary normal', () => (
    <Button type='primary' onClick={handleClick}>CANCEL</Button>
  ))
  .add('button primary sm', () => (
    <Button type='primary' small onClick={handleClick}>ADD TO BAG</Button>
  ))
  .add('button default lg', () => (
    <Button large onClick={handleClick}>CREATE AN ACCOUNT</Button>
  ))
  .add('button warning sm', () => (
    <Button type='warning' small onClick={handleClick}>DELETE</Button>
  ))
  .add('button disabled', () => (
    <Button type='primary' disabled onClick={handleClick}>DISABLED</Button>
  ))
