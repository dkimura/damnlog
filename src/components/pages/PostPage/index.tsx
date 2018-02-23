import * as React from 'react'
import styled from 'styled'
import { Head } from 'react-static'

import { Icon } from 'components/parts/Icon'
import { Hero, Title, Meta } from 'components/parts/Hero'
import { Template } from 'components/templates/Template'

import Markdown from 'markdown-to-jsx'

import { BasePageProps, Post } from 'types'

interface Props extends BasePageProps {
  post: Post
}

const Date = styled.p`
  display: inline-flex;
  align-items: center;
  line-height: 1;
`

const Calendar = styled(Icon.Calendar)`
  margin-right: 0.4em;
`

export const PostPage: React.StatelessComponent<Props> = ({
  handleHistoryPush,
  post,
}) => (
  <Template onNavClick={handleHistoryPush}>
    <Head>
      <title>{post.title} | damnlog</title>
      <meta
        name="description"
        content="Oh no's! We couldn't find that page :("
      />
    </Head>
    <Hero>
      <Title>{post.title}</Title>
      <Meta>
        <Date>
          <Calendar />
          {post.date}
        </Date>
      </Meta>
    </Hero>
    <main>
      <Markdown>{post.body}</Markdown>
    </main>
  </Template>
)
