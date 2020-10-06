import styled, { css } from 'styled-components'

import { mixin, color, font } from '@styles'
import Icon from '@shared/components/icon'

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;
  height: 45px;
  width: 100%;
`

export const InputElement = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 10px;
  border-radius: 5px;
  color: ${color.textDarkest};
  background: ${color.inputBackground};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
  ${(props) => props.hasIcon && 'padding-left: 32px;'}
  &:focus {
    background: #fff;
    background: ${mixin.darken(color.inputBackground, 0.1)};
  }
  &:hover:not(:focus) {
    background: ${mixin.darken(color.inputBackground, 0.1)};
  }

  border: none;
  outline: none;
`

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  left: 8px;
  pointer-events: none;
  color: ${color.textMedium};
`
