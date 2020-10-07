import styled from 'styled-components'
import { font, device } from '@styles'

export const SectionTitle = styled.h3`
  color: #191a1b;
  display: flex;
  justify-content: center;
  text-align: center;

  ${font.bold};
  ${font.size(34)};
  padding-right: 14px;
  padding-left: 14px;
  @media ${device.tablet} {
    padding-right: 64px;
    padding-left: 64px;
    ${font.size(64)};
  }

  max-width: 800px;

  margin: 0 auto 0;
  padding-top: 64px;
`

export const Subtitle = styled.h5`
  color: #191a1b;
  text-align: center;

  line-height: 28px;
  ${font.regular};
  ${font.size(18)};

  max-width: 680px;

  margin: 0 auto 30px auto;
  padding: 40px 0 10px;
`

export const Grid = styled.div`
  margin-top: 44px;
  margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;

  opacity: 0.5;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;

  justify-items: center;
  align-items: center;

  grid-auto-columns: 1fr;

  grid-row-gap: 16px;
  grid-column-gap: 16px;
`

export const Company = styled.img`
  margin: 10px 20px;
  color: #191a1b;
  font-size: 16px;
  line-height: 28px;
  height: 40px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    height: 50px;
    text-align: left;
    align-items: flex-start;
  }
`
