import * as React from 'react'

import { Hero, Title, Description } from 'components/parts/Hero'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'

export const NotFoundPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Hero>
      <Title>404 - NotFound</Title>
      <Description>Oh no's! We couldn't find that page :(</Description>
    </Hero>
  </Template>
)
