import * as React from 'react'

import { Hero, Title, Description } from 'components/parts/Hero'
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
      <Hero>
        <Title>damnlog</Title>
        <Description>my damn logs...</Description>
      </Hero>
      <main>
        <h2>Recent Posts</h2>
        <ul>
          {posts.slice(0, 4).map(post => (
            <li key={post.slug}>
              <a
                href={`/posts/${post.slug}/`}
                onClick={event =>
                  handleHistoryPush &&
                  handleHistoryPush(event, `/posts/${post.slug}/`)
                }
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Template>
  )
