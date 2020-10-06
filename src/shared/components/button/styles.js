import styled, { css } from 'styled-components'

import { color, font, mixin } from '@styles'
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
  ${mixin.clickable}

  ${(props) => colorVariants[props.colorVariant]};
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

const colored = css`
  color: #fff;
  background: ${(props) => color[props.variant]};
  ${font.medium}
  &:not(:disabled) {
    &:hover {
      background: ${(props) => mixin.lighten(props.background, 0.15)};
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

const secondaryAndEmptyShared = css`
  color: ${color.textDark};
  ${font.regular}
  &:not(:disabled) {
    &:hover {
      background: ${color.backgroundLight};
    }
    &:active {
      color: ${color.primary};
      background: ${color.backgroundLightPrimary};
    }
    ${(props) =>
      props.isActive &&
      css`
        color: ${color.primary};
        background: ${color.backgroundLightPrimary} !important;
      `}
  }
`

const buttonVariants = {
  primary: colored,
  link: colored,
  button: colored,
  success: colored,
  danger: colored,
  secondary: css`
    background: ${color.secondary};
    ${secondaryAndEmptyShared};
  `,
  empty: css`
    background: #fff;
    ${secondaryAndEmptyShared};
  `,
}

export const StyledSpinner = styled(Spinner)`
  position: relative;
  top: 1px;
`

export const Text = styled.div`
  padding-left: ${(props) => (props.withPadding ? 8 : 0)}px;
  padding-right: ${(props) => (props.withPadding ? 8 : 0)}px;
`
