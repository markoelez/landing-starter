import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Icon from '@shared/components/icon'
import Hamburger from 'hamburger-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { Menu, X } from 'react-feather'

import { Button } from '@shared/components'
import { NavRoutes } from '@shared/utils/constants/nav_routes'
import { color } from '@styles'

import { Link } from 'gatsby'

import {
  MobileActions,
  StyledNav,
  MobileLinkItem,
  Content,
  Section,
  ActionsSection,
  Mobile,
  MobileMenu,
  MenuToggle,
  LogoWrapper,
  CompanyName,
  LinkItem,
  LinksSection,
} from './styles'

const propTypes = {
  items: PropTypes.list,
  renderLogo: PropTypes.func,
  renderScrolledButton: PropTypes.func,
  brandText: PropTypes.string,
  textColor: PropTypes.string,
  scrolledTextColor: PropTypes.string,
  scrolledLogoColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  textColorHover: PropTypes.string,
  background: PropTypes.string,
  scrolledBackground: PropTypes.string,
  logoColor: PropTypes.string,
  logoTextColor: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'absolute', 'relative']),
  borderType: PropTypes.oneOf(['dark', 'light', 'none']),
  route: PropTypes.string,
}

const defaultProps = {
  items: undefined,
  brandText: undefined,
  scrolledTextColor: '#000',
  scrolledLogoColor: '#000',
  textColor: '#000',
  textColorHover: '#000',
  buttonColor: '#000',
  position: 'absolute',
  buttonTextColor: '#fff',
  background: '#fff',
  scrolledBackground: '#fff',
  logoColor: '#000',
  logoTextColor: '#000',
  borderType: 'light',
  route: NavRoutes.HOME,
  renderLogo: undefined,
  renderButton: undefined,
  renderScrolledButton: undefined,
}

const Nav = ({
  brandText,
  items,
  route,
  textColor,
  scrolledTextColor,
  buttonColor,
  buttonTextColor,
  textColorHover,
  withBrandText,
  renderLogo,
  renderButton,
  renderScrolledButton,
  background,
  scrolledBackground,
  scrolledLogoColor,
  logoColor,
  logoTextColor,
  borderType,
  buttonVariant,
  position,
}) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }

  const [hasScrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getRoute = (name) => {
    return '/' + name.toLowerCase().replaceAll(' ', '-')
  }

  return (
    <Fragment>
      <StyledNav
        background={background}
        scrolledBackground={scrolledBackground}
        borderType={borderType}
        position={position}
        scrolled={hasScrolled}
      >
        <Content>
          <Scrollspy offset={-64}>
            <Section scrolled={hasScrolled}>
              {renderLogo && (
                <LogoWrapper
                  color={logoColor}
                  scrolledColor={scrolledLogoColor}
                  scrolled={hasScrolled}
                >
                  <Link to="/">{renderLogo()}</Link>
                </LogoWrapper>
              )}
              {brandText && (
                <Link to="/">
                  <CompanyName
                    color={logoTextColor}
                    scrolledColor={scrolledLogoColor}
                    scrolled={hasScrolled}
                  >
                    {brandText}
                  </CompanyName>
                </Link>
              )}
            </Section>
          </Scrollspy>

          <LinksSection
            color={textColor}
            scrolledColor={scrolledTextColor}
            scrolled={hasScrolled}
          >
            {items.map((v, i) => (
              <Link to={getRoute(v)}>
                <LinkItem
                  key={i}
                  isActive={false}
                  textColorHover={textColorHover}
                  activeColor={logoColor}
                >
                  {v.toLowerCase()}
                </LinkItem>
              </Link>
            ))}
          </LinksSection>
          <ActionsSection>
            <Mobile>
              {!hasScrolled && renderButton && renderButton()}
              {hasScrolled && renderScrolledButton && renderScrolledButton()}
            </Mobile>
            <Mobile hide={true}>
              <Hamburger
                toggled={mobileMenuOpen}
                toggle={toggleMobileMenu}
                size={25}
                color={logoColor}
              />
            </Mobile>
          </ActionsSection>
        </Content>
      </StyledNav>

      <MobileMenu
        color={textColor}
        background={background}
        animate={mobileMenuOpen ? 'open' : 'closed'}
        variants={variants}
      >
        {items.map((v, i) => (
          <Link to={'/' + v.toLowerCase()}>
            <MobileLinkItem
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={i}
              isActive={false}
              textColorHover={textColorHover}
              activeColor={logoColor}
            >
              {v.toLowerCase()}
            </MobileLinkItem>
          </Link>
        ))}
      </MobileMenu>
    </Fragment>
  )
}

Nav.propTypes = propTypes

Nav.defaultProps = defaultProps

export default Nav
