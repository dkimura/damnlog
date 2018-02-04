import * as React from 'react'
import { Head } from 'react-static'

import { Hero, Title } from 'components/parts/Hero'
import { Template } from 'components/templates/Template'

import remark from 'remark';
import reactRenderer from 'remark-react';

import { BasePageProps, Post } from 'types'

interface Props extends BasePageProps {
  post: Post
}

export const PostPage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  post
}) => (
    <Template onNavClick={handleHistoryPush}>
      <Head>
        <title>{post.title} | damnlog</title>
        <meta name="description" content="Oh no's! We couldn't find that page :(" />
      </Head>
      <Hero>
        <Title>{post.title}</Title>
      </Hero>
      <main>
        {post.body &&
          remark()
            .use(reactRenderer)
            .processSync(post.body).contents}
      </main>
    </Template>
  )
