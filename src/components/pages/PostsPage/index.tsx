import * as React from 'react'
import { Head } from 'react-static'

import { Template } from 'components/templates/Template'
import { PostList } from 'components/parts/PostList'

import { BasePageProps, Post } from 'types'
import { Hero, Title, Description, Meta } from 'components/parts/Hero'

interface Props extends BasePageProps {
  posts: Post[]
}

export const PostsPage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  posts,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Head>
      <title>Posts | damnlog</title>
      <meta name="description" content="my damn logs..." />
    </Head>
    <Hero>
      <Title>Posts</Title>
      <Meta>
        <Description>my damn logs...</Description>
      </Meta>
    </Hero>
    <main>
      <PostList posts={posts} onClick={handleHistoryPush} />
    </main>
  </Template>
)
