/* istanbul ignore file */

import React from 'react'
import SEO from '@components/seo'

import { NavRoutes } from '@shared/utils/constants/nav_routes'
import { color } from '@styles'
import Nav from '@components/nav'
import Footer from '@components/footer'
import Header from './header'

import { Page, Container, Main, Title, Description } from './styles'

const Home = () => {
  const ANIMATION_DELAY = 0.2
  const ANIMATION_DURATION = 0.5
  const DELTA_Y = -50
  const TRANSITION_EASE_IN = [0.48, 0.15, 0.25, 0.96]

  return (
    <Page>
      <SEO title="Home" />

      <Nav
        bgColor="transparent"
        textColor="#fff"
        textColorHover="#222"
        logoColor="#fff"
        borderType="none"
        buttonVariant="primary"
        buttonTextColor={color.primary}
        buttonColor="#fff"
        route={NavRoutes.HOME}
      />

      <Container>
        <Main>
          <Header />
        </Main>
      </Container>
    </Page>
  )
}

export default Home
