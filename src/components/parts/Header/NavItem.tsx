import * as React from 'react'
import styled, { css } from 'styled'

interface Props {
  className?: string
  href: string
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const A = styled.a`
  color: #455a64;
`

const styles = css`
  display: inline-flex;
  margin-right: 0.625em;

  ${({ isActive }: Props) =>
    isActive
      ? css`
          > ${A} {
            font-weight: 700;
            pointer-events: none;
          }
        `
      : ''};
`

const NavItem: React.StatelessComponent<Props> = ({
  children,
  className,
  href,
  onClick,
}) => (
  <li className={className}>
    <A href={href} onClick={event => onClick && onClick(event, href)}>
      {children}
    </A>
  </li>
)

export default styled(NavItem)`
  ${styles};
`
