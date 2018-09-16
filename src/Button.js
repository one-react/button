import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends React.Component {
  render () {
    const {type, small, large, children, disabled} = this.props
    const btnClass = classNames({
      'or-btn': true,
      [`or-btn-${type === undefined ? 'default' : type}`]: true,
      'or-btn-large': large,
      'or-btn-small': small,
      disabled
    })

    return (
      <div className={btnClass} onClick={this.handleClick}>
        {children}
      </div>
    )
  }

  handleClick = e => {
    e.preventDefault()
    const { disabled, onClick } = this.props
    if (!disabled && onClick) {
      onClick()
    }
  }
}

Button.propTypes = {
  type: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Button
