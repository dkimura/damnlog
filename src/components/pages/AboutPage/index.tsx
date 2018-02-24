import * as React from 'react'
import { Head } from 'components/parts/Head'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'
import { Hero, Title, Description, Meta } from 'components/parts/Hero'

export const AboutPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Head title="[WIP] About Me | damnlog" description="Who am I?" />
    <Hero>
      <Title>[WIP] About Me</Title>
      <Meta>
        <Description>Who am I?</Description>
      </Meta>
    </Hero>
    <main>
      <p>TBA</p>
    </main>
  </Template>
)
