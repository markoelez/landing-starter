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


const Home = () => {
  const NAV_ITEMS = ['our mission', 'solutions', 'learn', 'pricing']

  return (
    <Fragment>
      <Nav
        items={NAV_ITEMS}
        brandText="Company"
        position="fixed"
        mobileTextColor="#fff"
        mobileToggleColor="#000"
        scrolledMobileToggleColor="#fff"
        mobileBackground={color.primary}
        background="transparent"
        scrolledBackground={color.primary}
        textColor="#191a1b"
        scrolledTextColor="#fff"
        textColorHover="#222"
        scrolledLogoColor="#fff"
        logoColor="#fe5e5f"
        logoTextColor="#000"
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
            variant="dark"
            background="#516cf0"
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
