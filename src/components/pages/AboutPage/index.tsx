import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'
import { Hero, Title, Description } from 'components/parts/Hero'

export const AboutPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Hero>
      <Title>[WIP] About Me</Title>
      <Description>Who am I?</Description>
    </Hero>
  </Template>
)
