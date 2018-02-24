import * as React from 'react'
import { Head as Helmet } from 'react-static'

interface Props {
  title: string
  description: string
  ogType?: 'website' | 'article'
}

export const Head: React.StatelessComponent<Props> = ({
  title = 'damnlog',
  description = 'Mine has been a life of much shame.',
  ogType = 'website',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Facebook */}
    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/* twitter */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
)
