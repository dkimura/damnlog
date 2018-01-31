import * as React from 'react'
import { Template } from 'components/templates/Template'

import { BasePageProps, Post } from 'types'

interface Props extends BasePageProps {
  post: Post
}

export const PostPage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  post,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <h1>PostPage</h1>

    <a
      href="/posts"
      onClick={event => handleHistoryPush && handleHistoryPush(event, '/posts')}
    >
      {'<'} Back
    </a>

    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </Template>
)
