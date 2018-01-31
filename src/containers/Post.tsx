import { compose } from 'recompose'
import { getRouteProps } from 'react-static'
import { withHistory } from 'hoc/withHistory'

import { PostPage } from 'components/pages/PostPage'

import { Post } from 'types'

interface InnerProps {
  post: Post
}

export default compose<InnerProps, {}>(getRouteProps, withHistory)(PostPage)
