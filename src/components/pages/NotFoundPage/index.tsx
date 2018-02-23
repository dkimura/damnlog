import * as React from 'react'
import { Head } from 'react-static'

import { Hero, Title, Meta, Description } from 'components/parts/Hero'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'

export const NotFoundPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Head>
      <title>404 - NotFound | damnlog</title>
      <meta
        name="description"
        content="Oh no's! We couldn't find that page :("
      />
    </Head>
    <Hero>
      <Title>404 - NotFound</Title>
      <Meta>
        <Description>Oh no's! We couldn't find that page :(</Description>
      </Meta>
    </Hero>
  </Template>
)
