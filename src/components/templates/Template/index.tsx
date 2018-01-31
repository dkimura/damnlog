import * as React from 'react'

import { Container } from 'components/parts/Container'
import { Header, Nav, NavItem } from 'components/parts/Header'

export interface Props {
  onNavClick?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => void
}

export const Template: React.StatelessComponent<Props> = ({
  children,
  onNavClick,
}) => (
  <Container>
    <Header>
      <Nav>
        <NavItem href="/" onClick={onNavClick}>
          HOME
        </NavItem>
        <NavItem href="/about" onClick={onNavClick}>
          ABOUT
        </NavItem>
        <NavItem href="/posts" onClick={onNavClick}>
          POSTS
        </NavItem>
      </Nav>
    </Header>
    {children}
  </Container>
)
