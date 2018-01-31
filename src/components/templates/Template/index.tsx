import * as React from 'react'

import { Container } from 'components/parts/Container'
import { Icon } from 'components/parts/Icon'
import { Header, Nav, NavItem } from 'components/parts/Header'
import { Footer, SocialMenu, SocialMenuItem } from 'components/parts/Footer'

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
    <Footer>
      <SocialMenu>
        <SocialMenuItem>
          <a href="https://github.com/dkimura" target="_blank" rel="noopener">
            <Icon.GitHub />
          </a>
        </SocialMenuItem>
        <SocialMenuItem>
          <a href="https://twitter.com/habu0104" target="_blank" rel="noopener">
            <Icon.Twitter />
          </a>
        </SocialMenuItem>
      </SocialMenu>
    </Footer>
  </Container>
)
