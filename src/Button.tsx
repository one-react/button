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
   * custom classname
   **/
  classname?: string
  /**
   * callback triggered button click
   **/
  onClick?: () => void
}

export class Button extends PureComponent<Props, {}> {
  public render() {
    const {
      type = 'default',
      size = 'default',
      children,
      disabled,
      classname
    } = this.props
    const btnClass = clx(
      'or-btn',
      {
        [`or-btn-${type}`]: type,
        [`or-btn-size-${size}`]: size,
        [`or-btn-disabled`]: disabled
      },
      classname
    )

    return (
      <div className={btnClass} onClick={this.handleClick}>
        {children}
      </div>
    )
  }

  public handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const { disabled, onClick } = this.props
    if (!disabled && onClick) {
      onClick()
    }
  }
}
