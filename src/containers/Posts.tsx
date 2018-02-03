import { compose } from 'recompose'
import { withRouteData } from 'react-static'
import { withHistory } from 'hoc/withHistory'

import { PostsPage } from 'components/pages/PostsPage'

import { Post } from 'types'

interface InnerProps {
  posts: Post[]
}

export default compose<InnerProps, {}>(withRouteData, withHistory)(PostsPage)
