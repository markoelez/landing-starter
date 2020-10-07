import React from 'react'

import Logo from '@components/logo'

import { COMPANY_LOGO_NAME } from '@constants/styles'
import {
  FooterColumn,
  LogoWrapper,
  FooterColumnContainer,
  FooterWrapper,
} from './styles'

import { Link } from 'gatsby'

const Footer = () => (
  <FooterWrapper>
    <FooterColumnContainer>
      <FooterColumn>
        <LogoWrapper>
          <Link to="/">
            <Logo icon={COMPANY_LOGO_NAME} color="#000" disableFill={true} />
          </Link>
        </LogoWrapper>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Compare</li>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

export default Footer
