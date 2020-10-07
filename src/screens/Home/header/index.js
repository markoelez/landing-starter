import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Button, Input } from '@shared/components'
import {
  HeaderWrapper,
  Flex,
  HeaderTextGroup,
  Container,
  FormSubtitleLink,
  HeaderForm,
  InputWrapper,
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
              <InputWrapper>
                <Input placeholder="Your email" />
              </InputWrapper>
              <Button
                href="https://app.unimetrics.io"
                variant="dark"
                background="#516cf0"
                color="#fff"
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
