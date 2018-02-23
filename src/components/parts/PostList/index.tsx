import * as React from 'react'
import styled from 'styled'
import { Post } from 'types'

interface Props {
  posts?: Post[]
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const UL = styled.ul`
  margin: 0;
`

const LI = styled.li`
  display: flex;

  & + & {
    margin-top: 1em;
  }
`

const A = styled.a`
  display: flex;
`

const TIME = styled.time`
  font-size: 0.875em;
  margin-right: 1em;
`

const TITLE = styled.h3`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
`

export const PostList: React.StatelessComponent<Props> = ({
  posts,
  onClick,
}) => (
  <UL>
    {posts &&
      posts.map(post => (
        <LI>
          <A
            href={post.slug}
            onClick={event => onClick && onClick(event, `/posts/${post.slug}/`)}
          >
            <TIME dateTime={post.date}>{post.date}</TIME>
            <TITLE>{post.title}</TITLE>
          </A>
        </LI>
      ))}
  </UL>
)
