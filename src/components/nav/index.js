import React from 'react'
import PropTypes from 'prop-types'

import Logo from '@components/logo'
import { Button } from '@shared/components'
import { NavRoutes } from '@shared/utils/constants/nav_routes'
import { color } from '@styles'

import { COMPANY_NAME, COMPANY_LOGO_NAME } from '@constants/styles'

import { Link } from 'gatsby'

import {
  StyledNav,
  Content,
  Section,
  LogoWrapper,
  CompanyName,
  LinkItem,
  LinksSection,
} from './styles'

const propTypes = {
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  textColorHover: PropTypes.string,
  bgColor: PropTypes.string,
  logoColor: PropTypes.string,
  borderType: PropTypes.oneOf(['dark', 'light', 'none']),
  route: PropTypes.string,
}

const defaultProps = {
  textColor: color.textLight,
  textColorHover: '#000',
  buttonColor: '#000',
  buttonTextColor: '#fff',
  bgColor: '#fff',
  logoColor: 'primary',
  borderType: 'light',
  route: NavRoutes.HOME,
}

const Nav = ({
  route,
  textColor,
  buttonColor,
  buttonTextColor,
  textColorHover,
  bgColor,
  logoColor,
  borderType,
  buttonVariant,
}) => {
  return (
    <StyledNav bgColor={bgColor} borderType={borderType}>
      <Content>
        <Section>
          <LogoWrapper color={logoColor}>
            <Link to="/">
              <Logo icon={COMPANY_LOGO_NAME} disableFill={true} />
            </Link>
          </LogoWrapper>
          <Link to="/">
            <CompanyName color={logoColor}>{COMPANY_NAME}</CompanyName>
          </Link>
        </Section>

        <LinksSection>
          <Link to="/product">
            <LinkItem
              isActive={route === NavRoutes.FORUM}
              textColorHover={textColorHover}
              color={textColor}
              activeColor={logoColor}
            >
              Product
            </LinkItem>
          </Link>
          <Link to="/solutions">
            <LinkItem
              isActive={route === NavRoutes.MISSION}
              activeColor={logoColor}
              color={textColor}
              textColorHover={textColorHover}
            >
              Solutions
            </LinkItem>
          </Link>
          <Link to="/learn">
            <LinkItem
              isActive={route === NavRoutes.COMPANY}
              activeColor={logoColor}
              color={textColor}
              textColorHover={textColorHover}
            >
              Learn
            </LinkItem>
          </Link>
          <Link to="/pricing">
            <LinkItem
              isActive={route === NavRoutes.SERVICES}
              activeColor={logoColor}
              color={textColor}
              textColorHover={textColorHover}
            >
              Pricing
            </LinkItem>
          </Link>
        </LinksSection>
        <Section>
          <Button
            href="https://app.unimetrics.io"
            icon="arrow-right"
            iconPos="after"
            variant={buttonVariant}
            background={buttonColor}
            color={buttonTextColor}
          >
            Get Started
          </Button>
        </Section>
      </Content>
    </StyledNav>
  )
}

Nav.propTypes = propTypes

Nav.defaultProps = defaultProps

export default Nav
