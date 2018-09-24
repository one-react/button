import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '../../src'

import './index.scss'

const handleClick = action('button-click')
storiesOf('or-button', module).add(
  'basic',
  withInfo({ inline: true })(() => (
    <div>
      <h1>button type:</h1>
      <div>
        <Button classname="hello world" type="primary" onClick={handleClick}>
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
      <div className="size">
        <h1>small size:</h1>
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
        <h1>normal size:</h1>
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
        <h1>large size:</h1>
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
        <h1>text is too long:</h1>
        <div className="long">
          <Button size="large" onClick={handleClick}>
            TOO LOOOOOOOOOOOOOOOOOOG
          </Button>
        </div>
      </div>
    </div>
  ))
)
