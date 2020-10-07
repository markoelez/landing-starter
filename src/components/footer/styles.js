import styled from 'styled-components'
import { mixin, font, device } from '@styles'

const Container = styled.div`
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

export const FooterWrapper = styled.footer`
  border-top: 1px solid rgb(241, 241, 241);
  padding: 50px 0 80px;

  color: #000;
`

export const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-items: center;
`
export const FooterColumn = styled.div`
  span {
    ${font.size(16)};
    ${font.bold};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    li {
      margin-bottom: 12px;
      ${font.size(15)};
      ${font.regular};
    }
  }
`

export const LogoWrapper = styled.div`
  ${mixin.clickable};

  min-width: 40px;
`
