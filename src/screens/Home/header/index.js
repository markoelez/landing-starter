import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Button } from '@shared/components'
import { color } from '@styles'
import {
  HeaderWrapper,
  Flex,
  HeaderTextGroup,
  Subtitle,
  Container,
  FormSubtitleLink,
  HeaderForm,
  HeaderInput,
  HeaderButton,
  FormSubtitle,
  ImageWrapper,
  StyledImage,
} from './styles'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ppl.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper>
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
              One course,
              <br />
              infinite possibilities
            </h1>
            <h2>
              Train remotely to become a software engineer and pay no tuition
              until you’re hired.
            </h2>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderInput placeholder="Your email" />
              <Button
                href="https://app.unimetrics.io"
                variant="button"
                background="#fff"
                color={color.primary}
              >
                Get Started
              </Button>
            </HeaderForm>
            <FormSubtitle>
              Already have an account?
              <FormSubtitleLink to="/">Sign in</FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
