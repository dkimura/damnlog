import * as React from 'react'

import { Hero, Title, Description } from 'components/parts/Hero'
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
    <Hero>
      <Title>{post.title}</Title>
    </Hero>
    <p>{post.body}</p>
  </Template>
)
