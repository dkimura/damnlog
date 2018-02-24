import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import path from 'path'

import { loadContents } from './loadContents'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'damnlog',
    description: 'Mine has been a life of much shame.',
  }),
  getRoutes: async () => {
    const posts = loadContents('./contents')

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({ posts }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/posts',
        component: 'src/containers/Posts',
        getData: () => ({ posts }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/NotFound',
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Facebook */}
        <meta property="og:url" content="https://damnlog.bdd.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Content Title" />
        <meta property="og:image" content="https://damnlog.bdd.xyz/ogp.png" />
        <meta
          property="og:description"
          content="Mine has been a life of much shame."
        />
        <meta property="og:site_name" content="damnlog" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="article:author" content="Daichi Kimura" />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@habu0104" />
        <meta name="twitter:url" content="https://damnlog.bdd.xyz" />
        <meta name="twitter:title" content="damnlog" />
        <meta
          name="twitter:description"
          content="Mine has been a life of much shame."
        />
        <meta name="twitter:image" content="https://damnlog.bdd.xyz/ogp.png" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
