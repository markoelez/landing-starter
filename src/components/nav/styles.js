import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { font, mixin, device } from '@styles'

export const StyledNav = styled.nav`
  position: ${(props) => props.position};

  padding: ${(props) => (props.scrolled ? `10px 25px` : `15px 30px`)};
  @media ${device.laptop} {
    padding: ${(props) => (props.scrolled ? `12px 30px` : `20px 50px`)};
  }

  width: 100%;
  top: 0;

  ${({ borderType }) => handleBorderType(borderType)};

  background: ${(props) =>
    props.scrolled ? props.scrolledBackground : props.background};

  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  z-index: 1000;
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
  ${font.bold};

  font-size: ${({ scrolled }) => (scrolled ? '16px' : '20px')};

  color: ${(props) => (props.scrolled ? props.scrolledColor : props.color)};

  ${mixin.clickable};

  padding-left: 12px;
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ActionsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  z-index: 999;

  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: ${(props) => props.background};
  color: ${(props) => props.color};

  padding: 10px 50px;
`

export const Mobile = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
  }

  ${(props) =>
    props.hide &&
    `
    display: flex;

  @media ${device.laptop} {
      display: none;
    }
  `}
`

export const MobileActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
`

export const LinksSection = styled(Section)`
  display: none;
  font-size: ${({ scrolled }) => (scrolled ? '13px' : '14px')};
  @media ${device.laptop} {
    display: flex;
  }
  color: ${(props) => (props.scrolled ? props.scrolledColor : props.color)};
`

export const LogoWrapper = styled.div`
  color: ${(props) => (props.scrolled ? props.scrolledColor : props.color)};
  min-width: 34px;
  ${mixin.clickable};
`

export const LinkItem = styled.div`
  display: flex;

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

  ${font.bold};

  padding: 0 30px;
`

export const MobileLinkItem = styled(motion.div)`
  display: flex;

  transition-property: color, border-color, background-color;
  transition: 0.1s linear;

  text-transform: uppercase;

  ${mixin.clickable};

  ${({ isActive, activeColor }) =>
    isActive &&
    css`
      //border-bottom: 2px solid ${activeColor};
    `};

  ${font.size(40)};
  ${font.bold};

  padding: 15px 0;
`
