import styled, { css } from 'styled-components'

import { font, mixin } from '@styles'
import Spinner from '@shared/components/spinner'

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  vertical-align: middle;
  line-height: 1;
  padding: 0 ${(props) => (props.iconOnly ? 9 : 16)}px;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s;
  appearance: none;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  ${font.medium}
  ${font.size(14.5)}

  background: ${(props) => props.background};
  color: ${(props) => props.color};

  ${(props) => colorVariants[props.variant]};
  ${mixin.clickable}
`

const light = css`
  &:not(:disabled) {
    &:hover {
      background: ${(props) => mixin.darken(props.background, 0.15)};
    }
    &:active {
      background: ${(props) => mixin.darken(props.background, 0.1)};
    }
    ${(props) =>
      props.isActive &&
      css`
        background: ${mixin.darken(props.background, 0.1)} !important;
      `}
  }
`

const dark = css`
  &:not(:disabled) {
    &:hover {
      background: ${(props) => mixin.lighten(props.background, 0.15)};
    }
    &:active {
      background: ${(props) => mixin.lighten(props.background, 0.1)};
    }
    ${(props) =>
      props.isActive &&
      css`
        background: ${mixin.lighten(props.background, 0.1)} !important;
      `}
  }
`

const colorVariants = {
  light: light,
  dark: dark,
}

export const StyledSpinner = styled(Spinner)`
  position: relative;
  top: 1px;
`

export const Text = styled.div`
  padding-left: ${(props) => (props.withPadding ? 8 : 0)}px;
  padding-right: ${(props) => (props.withPadding ? 8 : 0)}px;
`
