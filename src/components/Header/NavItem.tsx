import * as React from 'react'
import styled, { css } from 'styled'

interface Props {
  className?: string
  href: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const styles = css`
  display: inline-flex;
  margin-right: 0.625em;
`

const NavItem: React.StatelessComponent<Props> = ({
  children,
  className,
  href,
  onClick,
}) => (
  <li className={className}>
    <a href={href} onClick={event => onClick && onClick(event, href)}>
      {children}
    </a>
  </li>
)

export default styled(NavItem)`
  ${styles};
`
