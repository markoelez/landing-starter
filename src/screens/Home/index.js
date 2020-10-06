import React, { Fragment } from 'react'

import Nav from '@components/nav'
import { NavRoutes } from '@shared/utils/constants/nav_routes'
import { color } from '@styles'

import { Button } from '@shared/components'
import Logo from '@components/logo'
import { COMPANY_LOGO_NAME } from '@constants/styles'
import Header from './header'
import Companies from './companies'
import Features from './features'

import { Page } from './styles'

const Home = () => {
  const NAV_ITEMS = ['our mission', 'solutions', 'learn', 'pricing']

  return (
    <Fragment>
      <Nav
        items={NAV_ITEMS}
        brandText="BLUE ORIGIN"
        position="fixed"
        background="transparent"
        scrolledBackground={color.primary}
        textColor="#000"
        scrolledTextColor="#fff"
        textColorHover="#222"
        scrolledLogoColor="#fff"
        logoColor="#000"
        borderType="none"
        buttonVariant="primary"
        buttonTextColor={color.primary}
        buttonColor="#fff"
        route={NavRoutes.HOME}
        renderLogo={() => <Logo icon={COMPANY_LOGO_NAME} disableFill={true} />}
        renderButton={() => (
          <Button
            href="https://app.unimetrics.io"
            icon="arrow-right"
            iconPos="after"
            variant="light"
            background="#000"
            color="#fff"
          >
            Get Started
          </Button>
        )}
        renderScrolledButton={() => (
          <Button
            href="https://app.unimetrics.io"
            icon="arrow-right"
            iconPos="after"
            variant="dark"
            background="#fff"
            color={color.primary}
          >
            Get Started
          </Button>
        )}
      />
      <Header />
      <Companies />
      <Features />
    </Fragment>
  )
}

export default Home
