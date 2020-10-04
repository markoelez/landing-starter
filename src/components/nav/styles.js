/* istanbul ignore file */

import styled, { css } from 'styled-components'
import { font, mixin, device } from '@styles'

export const StyledNav = styled.nav`
  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 10px;

  ${({ borderType }) => handleBorderType(borderType)};

  background: ${(props) => props.bgColor};

  z-index: 20;

  @media ${device.laptop} {
    padding: 25px 5%;
  }
`

const handleBorderType = (type) => {
  switch (type) {
    case 'light':
      return css`
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      `
    case 'dark':
      return css`
        border-bottom: 1px solid rgb(241, 241, 241);
      `
    case 'none':
      return
    default:
      return
  }
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
`

export const CompanyName = styled.div`
  ${font.regular};
  ${font.size(25)};

  color: ${(props) => props.color};

  ${mixin.clickable};

  padding-left: 12px;
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinksSection = styled(Section)`
  display: none;

  @media ${device.laptop} {
    display: flex;
  }
`

export const LogoWrapper = styled.div`
  color: ${(props) => props.color};
  ${mixin.clickable};
  min-width: 34px;
`

export const LinkItem = styled.div`
  display: flex;

  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.colorHover};
  }

  transition-property: color, border-color, background-color;
  transition: 0.1s linear;

  text-transform: uppercase;

  ${mixin.clickable};

  ${({ isActive, activeColor }) =>
    isActive &&
    css`
      //border-bottom: 2px solid ${activeColor};
    `};

  ${font.medium};
  ${font.size(14)};

  padding: 0 30px;
`
