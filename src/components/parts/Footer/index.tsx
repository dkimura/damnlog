import styled from 'styled'

export const Footer = styled.footer`
  &::before {
    margin-top: 2.5em;
    margin-bottom: 2em;
    content: '';
    display: block;
    border-bottom: 0.125em solid #ffcd00;
    width: 4em;
  }
`

export const SocialMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const SocialMenuItem = styled.li`
  display: inline-flex;
  margin-right: 0.625em;
`
