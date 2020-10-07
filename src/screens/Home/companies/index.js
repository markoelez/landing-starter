import React from 'react'
import { Section, Container } from '@components/global'
import { Subtitle, Grid, Company } from './styles'
import atlassian from '@images/atlassian.svg'

const Companies = () => {
  return (
    <Section>
      <Container>
        <Subtitle>
          More than 4 million people across 90,000 companies choose Loom
        </Subtitle>
        <Grid>
          <Company src={atlassian} />
          <Company src={atlassian} />
          <Company src={atlassian} />
          <Company src={atlassian} />
          <Company src={atlassian} />
          <Company src={atlassian} />
        </Grid>
      </Container>
    </Section>
  )
}

export default Companies
