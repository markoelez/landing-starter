import styled from 'styled-components'
import { mixin, color, font, device } from '@styles'

import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Container = styled.div`
  text-align: left;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media ${device.mobileL} {
    max-width: 540px;
  }

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.laptopL} {
    max-width: 1200px;
  }

  ${(props) =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background: ${color.primary};

  width: 100%;

  padding: 200px 0 200px 0;

  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`
export const Subtitle = styled.h5`
  font-size: 16px;
  color: ${color.textLight};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

export const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    margin: 0 16px;
    @media ${device.laptop} {
      width: 120%;
      margin-bottom: -4.5%;
    }
  }

  h1 {
    color: #fff;
    margin: 0 0 24px;
    ${font.size(36)};
  }

  h2 {
    line-height: 30px;
    color: #fff;
    margin-bottom: 24px;
    ${font.size(22)};
    ${font.regular};
  }

  p {
    margin-bottom: 48px;
  }
`

export const Flex = styled.div`
  @media ${device.laptop} {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
  grid-template-columns: 1fr;
  grid-gap: 64px;
`

export const HeaderForm = styled.form`
  flex-direction: column;
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const FormSubtitle = styled.span`
  color: #fff;
  ${font.size(15)};
`

export const FormSubtitleLink = styled(Link)`
  color: #fff;
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid #fff;
`

export const HeaderInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  padding: 8px 16px;
  &:focus {
    background: ${mixin.darken('#fff', 0.1)};
    inset: none;
  }
  &:hover:not(:focus) {
    background: ${mixin.darken('#fff', 0.1)};
  }
  margin-bottom: 8px;
  border: none;
  width: 100%;

  margin-right: 30px;

  background: ${color.formInputBackground};
  color: #000;

  border-radius: 3px;
  border-image: initial;
  outline: 0px;

  text-align: left;
  ${font.regular};
  ${font.size(16)};
`

export const HeaderButton = styled.button`
  display: inline-block;

  ${mixin.clickable};

  ${font.medium};
  ${font.size(12)};

  padding: 12px 18px;

  border-radius: 3px;

  white-space: nowrap;

  background: #fff;
  color: ${color.primary};
  text-transform: uppercase;

  transition: 0.1s linear;
  transition-property: color, border-color, background-color;

  &:hover {
    background: ${(props) => mixin.lighten('#0071e3', 0.3)};
  }
`
export const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media ${device.laptop} {
    justify-self: center;
  }
`

export const StyledImage = styled(Img)`
  width: 400px;
  @media ${device.laptop} {
    width: 450px;
  }
`
