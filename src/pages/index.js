import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '@components/layout'
import Image from '@components/image'
import SEO from '@components/seo'

import Home from '@screens/Home'
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
