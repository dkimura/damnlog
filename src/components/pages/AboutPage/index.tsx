import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'

export const AboutPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <h1>AboutPage</h1>
  </Template>
)
