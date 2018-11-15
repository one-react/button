import clx from 'classnames'
import React, { MouseEvent, PureComponent } from 'react'

interface Props {
  /**
   * type for button
   * @default 'default'
   **/
  type?: 'primary' | 'warning'
  /**
   * size for button
   * @default 'default'
   **/
  size?: 'large' | 'small'
  /**
   * whether the button can be clicked
   **/
  disabled?: boolean
  /**
   * custom className
   **/
  className?: string
  /**
   * callback triggered button click
   **/
  onClick?: () => void
}

export class Button extends PureComponent<Props, {}> {
  render() {
    const {
      type = 'default',
      size = 'default',
      children,
      disabled,
      className
    } = this.props
    const btnClass = clx(
      'or-btn',
      {
        [`or-btn-${type}`]: type,
        [`or-btn-size-${size}`]: size,
        [`or-btn-disabled`]: disabled
      },
      className
    )

    return (
      <div className={btnClass} onClick={this.handleClick}>
        {children}
      </div>
    )
  }

  handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const { disabled, onClick } = this.props
    if (!disabled && onClick) {
      onClick()
    }
  }
}
