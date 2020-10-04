import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { color } from '@styles'
import Icon from '@shared/components/icon'

import { StyledButton, StyledSpinner, Text } from './styles'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'secondary',
    'empty',
  ]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconPos: PropTypes.oneOf(['before', 'after']),
  iconSize: PropTypes.number,
  disabled: PropTypes.bool,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
}

const defaultProps = {
  className: undefined,
  children: undefined,
  variant: 'secondary',
  iconPos: 'before',
  icon: undefined,
  iconSize: 18,
  disabled: false,
  isWorking: false,
  onClick: () => {},
  background: color.primary,
  color: '#000',
}

const Button = forwardRef(
  (
    {
      children,
      variant,
      icon,
      iconSize,
      disabled,
      isWorking,
      onClick,
      iconPos,
      background,
      color,
      ...buttonProps
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && !isWorking) {
        onClick()
      }
    }

    return (
      <StyledButton
        {...buttonProps}
        onClick={handleClick}
        variant={variant}
        disabled={disabled || isWorking}
        isWorking={isWorking}
        background={background}
        color={color}
        iconOnly={!children}
        ref={ref}
      >
        {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}

        {iconPos == 'after' && children && (
          <Text withPadding={isWorking || icon}>{children}</Text>
        )}
        {!isWorking && icon && typeof icon === 'string' ? (
          <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
        ) : (
          icon
        )}
        {iconPos == 'before' && children && (
          <Text withPadding={isWorking || icon}>{children}</Text>
        )}
      </StyledButton>
    )
  }
)

const getIconColor = (variant) =>
  ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff'

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
