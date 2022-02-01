import { feeds } from '../pages/feeds'
import { testPage } from '../pages/testPage'
import { user } from '../pages/user'
import { storiesPage } from '../pages/storiesPage'

export default [
  {
    path: '/',
    component: feeds
  },
  {
    path: '/testPage',
    component: testPage
  },
  {
    path: '/user',
    component: user
  },
  {
    path: '/storiesPage',
    component: storiesPage
  }
]
