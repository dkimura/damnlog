import { compose, withHandlers } from 'recompose'
import { withRouter, RouteComponentProps } from 'react-static'

export interface OuterProps {
  handleHistoryPush: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => void
}

export const withHistory = compose<any, OuterProps>(
  withRouter,
  withHandlers({
    handleHistoryPush: ({ history }: RouteComponentProps<any>) => (
      event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      href: string,
    ) => {
      event.preventDefault()
      return history.push(href)
    },
  }),
)
