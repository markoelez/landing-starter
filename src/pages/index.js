import React, { Fragment } from 'react'

import { NavRoutes } from '@shared/utils/constants/nav_routes'
import Nav from '@components/nav'
import { color } from '@styles'

import SEO from '@components/seo'

import Home from '@screens/home'
import Footer from '@components/footer'

// Base styles
import NormalizeStyles from '@shared/utils/styles/normalize_styles'
import BaseStyles from '@shared/utils/styles/base_styles'
import '@shared/utils/styles/font_styles.css'

const IndexPage = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <SEO title="Home" />
    <Home />
    <Footer />
  </Fragment>
)

export default IndexPage
