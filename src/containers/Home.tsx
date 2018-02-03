import { compose } from 'recompose'
import { withRouteData } from 'react-static'
import { withHistory } from 'hoc/withHistory'

import { HomePage } from 'components/pages/HomePage'

import { Post } from 'types'

interface InnerProps {
  posts: Post[]
}

export default compose<InnerProps, {}>(withRouteData, withHistory)(HomePage)
