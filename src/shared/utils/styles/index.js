/* istanbul ignore file */

import { css } from 'styled-components'
import Color from 'color'

export const color = {
  //primary: '#0542d6',
  primary: '#516cf0',
  secondary: '#5569d4',
  success: '#0B875B',
  danger: '#E13C3C',
  warning: '#F89C1C',

  blue: '#28286e',
  red: '#ff4b49',
  beige: '#fafaf4',
  green: '#41cf8e',
  gray: '#f4f5f7',

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',

  inputBackground: '#efeef3',

  textLight: '#000',
  textLightSecondary: '#989899',
  textLightTertiary: '#5a5a5e',
  textLink: '#516cf0',

  backgroundDarkPrimary: '#0542d6',
  backgroundDarkSecondary: '#1c1d1f',

  formInputBackground: '#fff',

  backgroundMedium: '#dfe1e6',
  backgroundLight: '#fff',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#f8f9fb',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff',
}

export const zIndexValues = {
  modal: 1000,
  dropdown: 101,
  navLeft: 100,
}

export const font = {
  light: 'font-family: "F37 Ginger"; font-weight: 200;',
  regular: 'font-family: "F37 Ginger"; font-weight: 400;',
  medium: 'font-family: "F37 Ginger"; font-weight: 500;',
  bold: 'font-family: "F37 Ginger"; font-weight: 700;',
  black: 'font-family: "F37 Ginger"; font-weight: 800;',
  size: (size) => `font-size: ${size}px;`,
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const mixin = {
  darken: (colorValue, amount) => Color(colorValue).darken(amount).string(),
  lighten: (colorValue, amount) => Color(colorValue).lighten(amount).string(),
  rgba: (colorValue, opacity) => Color(colorValue).alpha(opacity).string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: (colorValue) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  customScrollbar: ({
    width = 8,
    background = color.backgroundMedium,
  } = {}) => css`
    &::-webkit-scrollbar {
      width: ${width}px;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99px;
      background: ${background};
    }
  `,
  backgroundImage: (imageURL) => css`
    background-image: url('${imageURL}');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${color.backgroundLight};
  `,
  link: (colorValue = color.textLink) => css`
    cursor: pointer;
    color: ${colorValue};
    ${font.medium}
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
  tag: (
    background = color.backgroundMedium,
    colorValue = color.textDarkest
  ) => css`
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding: 0 8px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    color: ${colorValue};
    background: ${background};
    ${font.bold}
    ${font.size(12)}
    i {
      margin-left: 4px;
    }
  `,
}
