import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps, Post } from 'types'

interface Props extends BasePageProps {
  posts: Post[]
}

export const PostsPage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  posts,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <h1>PostsPage</h1>
    <br />
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
