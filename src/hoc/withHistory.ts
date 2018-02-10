import { compose, withHandlers } from 'recompose'
import { withRouter, RouteComponentProps } from 'react-static'

export interface Handlers {
  handleHistoryPush: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => void
  handleHistoryReplace: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => void
}

export const withHistory = compose<any, Handlers>(
  withRouter,
  withHandlers<RouteComponentProps<any>, Handlers>({
    handleHistoryPush: ({ history }) => (
      event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      href: string,
    ) => {
      event.preventDefault()
      return history.push(href)
    },
    handleHistoryReplace: ({ history }) => (
      event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      href: string,
    ) => {
      event.preventDefault()
      return history.replace(href)
    },
  }),
)
