import * as React from 'react'

import { Router, Head, Link } from 'react-static'
import Routes from 'react-static-routes'

import { Container } from 'components/Container'
import { Header, Nav, NavItem } from 'components/Header'
import 'utils/globalStyles'

export default () => (
  <Router>
    <React.Fragment>
      <Container>
        <Head htmlAttributes={{ lang: 'ja-JP' }} />
        <Header>
          <Nav>
            <NavItem href="/">HOME</NavItem>
            <NavItem href="/about">ABOUT</NavItem>
            <NavItem href="/blog">REPO</NavItem>
          </Nav>
        </Header>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </React.Fragment>
  </Router>
)
