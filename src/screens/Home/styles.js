/* istanbul ignore file */

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { font, device } from '@styles'

export const Page = styled.div`
  position: relative;
  text-align: center;

  min-height: 100vh;
  width: 100%;
`

export const Container = styled.div`
  position: relative;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-left: auto;
  margin-right: auto;

  z-index: 10;
`

export const Title = styled(motion.div)`
  color: #000;

  ${font.regular};

  ${font.size(30)};
  @media ${device.tablet} {
    ${font.size(50)};
  }

  display: flex;
  margin: 0;

  text-align: center;

  padding-bottom: 20px;
`

export const Description = styled(motion.div)`
  color: #000;

  ${font.regular};
  ${font.size(18)};
  @media ${device.tablet} {
    ${font.size(24)};
  }

  text-align: center;
`

export const Actions = styled.div`
  background: transparent;

  position: relative;

  padding-top: 12rem;

  padding-left: 150px;
  padding-right: 150px;

  max-width: 1450px;
`

export const ArrowWrapper = styled(motion.div)`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  color: white;

  width: 30px;
  height: 30px;
`
