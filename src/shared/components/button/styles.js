import styled, { css } from 'styled-components'

import { color, font, mixin } from '@styles'
import Spinner from '@shared/components/spinner'

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  vertical-align: middle;
  line-height: 1;
  padding: 0 ${(props) => (props.iconOnly ? 9 : 15)}px;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s;
  appearance: none;
  ${mixin.clickable}
  ${font.size(14.5)}
  ${(props) => buttonVariants[props.variant]};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

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
  padding-left: ${(props) => (props.withPadding ? 7 : 0)}px;
  padding-right: ${(props) => (props.withPadding ? 7 : 0)}px;
`
