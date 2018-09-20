import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * The type for button
   **/
  type?: 'primary' | 'warning'
  /**
   * The size for button
   **/
  size?: 'large' | 'small'
  /**
   * whether the button can be clicked
   **/
  disabled?: boolean
  /**
   * button click callback
   **/
  onClick?: () => void
}

export class Button extends PureComponent<Props, {}> {
  public render() {
    const { type = 'default', size, children, disabled } = this.props
    const btnClass = clx({
      'or-btn': true,
      [`or-btn-${type}`]: type,
      [`or-btn-${size}`]: size,
      disabled
    })

    return (
      <div className={btnClass} onClick={this.handleClick}>
        {children}
      </div>
    )
  }

  public handleClick = e => {
    e.preventDefault()
    const { disabled, onClick } = this.props
    if (!disabled && onClick) {
      onClick()
    }
  }
}
