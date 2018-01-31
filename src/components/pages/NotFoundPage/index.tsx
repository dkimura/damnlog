import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps } from 'types'

export const NotFoundPage: React.StatelessComponent<BasePageProps> = ({
  handleHistoryPush,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <p>404 - Oh no's! We couldn't find that page :(</p>
  </Template>
)
