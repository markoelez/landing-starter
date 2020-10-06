import styled from 'styled-components'
import { font, color, device } from '@styles'

export const SectionTitle = styled.h3`
  background: #eff1f9;

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
  padding: 10px 0 40px;
`

export const FeaturesGrid = styled.div`
  display: grid;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
    grid-column-gap: 40px;
    grid-row-gap: 35px;
  }
  grid-template-columns: 1fr;

  padding-bottom: 64px;
`

export const FeatureItem = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${device.tablet} {
    text-align: left;
    align-items: flex-start;
  }
`

export const FeatureTitle = styled.h4`
  text-align: center;
  ${font.size(30)};
  @media ${device.tablet} {
    text-align: left;
    ${font.size(40)};
  }
  line-height: 1.2;
  margin-bottom: 10px;
`

export const FeatureText = styled.p`
  ${font.size(16)};
  @media ${device.tablet} {
    ${font.size(18)};
  }
  line-height: 28px;
`

export const Video = styled.video`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  background: red;
`
