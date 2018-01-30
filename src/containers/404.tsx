import * as React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  color: #fff;
`

const Element = styled.div`
  color: black;
`

export default () => (
  <Block>
    <Element>404 - Oh no's! We couldn't find that page :(</Element>
  </Block>
)
