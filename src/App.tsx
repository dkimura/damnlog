import * as React from 'react'

import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'

import { Container, Header } from 'components'
import 'utils/globalStyles'

console.log(Header)

export default () => (
  <Router>
    <React.Fragment>
      <Container>
        <Header>
          <Header.Nav>
            <Header.NavItem href="/">HOME</Header.NavItem>
            <Header.NavItem href="/about">ABOUT</Header.NavItem>
            <Header.NavItem href="/blog">REPO</Header.NavItem>
          </Header.Nav>
        </Header>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </React.Fragment>
  </Router>
)
