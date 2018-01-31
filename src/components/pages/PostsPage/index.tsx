import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps, Post } from 'types'
import { Hero, Title, Description } from 'components/parts/Hero'

interface Props extends BasePageProps {
  posts: Post[]
}

export const PostsPage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  posts,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Hero>
      <Title>Posts</Title>
      <Description>my damn logs...</Description>
    </Hero>
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <a
            href={`/posts/${post.id}/`}
            onClick={event =>
              handleHistoryPush &&
              handleHistoryPush(event, `/posts/${post.id}/`)
            }
          >
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  </Template>
)
