import styled from 'styled-components'
import { device } from '@styles'

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

export const Section = styled.section`
  position: relative;
  z-index: 1;

  width: 100%;

  padding-right: 24px;
  padding-left: 24px;

  background: ${(props) => (props.background ? props.background : '#fff')};

  @media ${device.tablet} {
    padding-right: 64px;
    padding-left: 64px;
  }

  overflow: hidden;
`
