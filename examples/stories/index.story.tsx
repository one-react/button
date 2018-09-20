import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '../../src'

import './index.scss'

const handleClick = action('button-click')
storiesOf('OR-Button', module)
  .add('button type', () => (
    <div className="type">
      <Button type="primary" onClick={handleClick}>
        ADD TO CART
      </Button>
      <Button onClick={handleClick}>SIGN UP</Button>
      <Button type="warning" onClick={handleClick}>
        DELETE
      </Button>
      <Button type="primary" disabled onClick={handleClick}>
        DISABLED
      </Button>
    </div>
  ))
  .add(
    'button size',
    withInfo({ inline: true })(() => (
      <div className="size">
        <h1>small:</h1>
        <div className="small">
          <Button type="primary" size="small" onClick={handleClick}>
            ADD TO CART
          </Button>
          <Button size="small" onClick={handleClick}>
            SIGN UP
          </Button>
          <Button type="warning" size="small" onClick={handleClick}>
            DELETE
          </Button>
          <Button type="primary" disabled size="small" onClick={handleClick}>
            DISABLED
          </Button>
        </div>
        <h1>normal:</h1>
        <div className="normal">
          <Button type="primary" onClick={handleClick}>
            ADD TO CART
          </Button>
          <Button onClick={handleClick}>SIGN UP</Button>
          <Button type="warning" onClick={handleClick}>
            DELETE
          </Button>
          <Button type="primary" disabled onClick={handleClick}>
            DISABLED
          </Button>
        </div>
        <h1>large:</h1>
        <div className="large">
          <Button type="primary" size="large" onClick={handleClick}>
            ADD TO CART
          </Button>
          <Button size="large" onClick={handleClick}>
            SIGN UP
          </Button>
          <Button type="warning" size="large" onClick={handleClick}>
            DELETE
          </Button>
          <Button type="primary" disabled size="large" onClick={handleClick}>
            DISABLED
          </Button>
        </div>
      </div>
    ))
  )
