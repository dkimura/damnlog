
import { readFileSync } from 'fs'
import glob from 'glob'
import fm from 'frontmatter'

const getMarkdownFiles = entriesPath =>
  glob.sync(`${entriesPath}/**/*.md`, { root: process.cwd() })

const formatPost = ({ data, content }) => ({
  body: content,
  date: data.date,
  slug: data.slug,
  title: data.title,
})

export const loadContents = entriesPath =>
  getMarkdownFiles(entriesPath)
    .map(path => readFileSync(path, 'utf-8'))
    .map(fm)
    .map(formatPost)
