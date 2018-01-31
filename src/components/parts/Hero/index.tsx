import styled from 'styled'

export const Hero = styled.div`
  margin-top: 1.5em;

  &::after {
    border-bottom: 0.125em solid #ffcd00;
    content: '';
    display: block;
    margin-bottom: 2.5em;
    margin-top: 2em;
    width: 4em;
  }
`

export const Title = styled.h1`
  margin-bottom: 0;
`

export const Description = styled.p`
  margin-top: 0.5em;
  font-style: italic;
`
