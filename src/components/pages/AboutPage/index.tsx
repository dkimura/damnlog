import * as React from 'react'
import { Head } from 'react-static'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'
import { Hero, Title, Description } from 'components/parts/Hero'

export const AboutPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
    <Template onNavClick={handleHistoryPush}>
      <Head>
        <title>[WIP] About Me | damnlog</title>
        <meta name="description" content="Who am I?" />
      </Head>
      <Hero>
        <Title>[WIP] About Me</Title>
        <Description>Who am I?</Description>
      </Hero>
      <main>
        <p>TBA</p>
      </main>
    </Template>
  )
