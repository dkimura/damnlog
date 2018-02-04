import { Props as TemplateProps } from 'components/templates/Template'

export interface BasePageProps extends TemplateProps {
  handleHistoryPush?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => void
}

export interface Post {
  body: string
  date: string
  title: string
  slug: string
}
