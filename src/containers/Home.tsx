import { compose } from 'recompose'
import { getRouteProps } from 'react-static'
import { withHistory } from 'hoc/withHistory'

import { HomePage } from 'components/pages/HomePage'

import { Post } from 'types'

interface InnerProps {
  posts: Post[]
}

export default compose<InnerProps, {}>(getRouteProps, withHistory)(HomePage)
