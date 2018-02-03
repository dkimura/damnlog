
import { readFileSync } from 'fs'
import glob from 'glob'
import fm from 'frontmatter'

const getMarkdownFiles = entriesPath =>
  glob.sync(`${entriesPath}/**/*.md`, { root: process.cwd() })

const formatPost = ({ data, content }) => ({
  title: data.title,
  date: data.date,
  body: content,
})

export const loadContents = entriesPath =>
  getMarkdownFiles(entriesPath)
    .map(path => readFileSync(path, 'utf-8'))
    .map(fm)
    .map(formatPost)
