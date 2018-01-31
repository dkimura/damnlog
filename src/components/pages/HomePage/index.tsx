import * as React from 'react'

import { Hero, Title, Description } from 'components/parts/Hero'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'

export const HomePage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Hero>
      <Title>damnlog</Title>
      <Description>my damn logs...</Description>
    </Hero>
  </Template>
)
