import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'

export const HomePage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <h1>HomePage</h1>
  </Template>
)
