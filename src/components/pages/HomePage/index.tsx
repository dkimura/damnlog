import * as React from 'react'
import { Head } from 'components/parts/Head'

import { Hero, Title, Description, Meta } from 'components/parts/Hero'
import { PostList } from 'components/parts/PostList'
import { Template } from 'components/templates/Template'

import { BasePageProps, Post } from 'types'

interface Props extends BasePageProps {
  posts: Post[]
}

export const HomePage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  posts,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Head title="damnlog" description="Mine has been a life of much shame." />
    <Hero>
      <Title>damnlog</Title>
      <Meta>
        <Description>Mine has been a life of much shame.</Description>
      </Meta>
    </Hero>
    <main>
      <h2>Recent Posts</h2>
      <PostList posts={posts.slice(0, 4)} onClick={handleHistoryPush} />
    </main>
  </Template>
)
