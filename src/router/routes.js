import { feeds } from '../pages/feeds'
import { testPage } from '../pages/testPage'
import { testUser } from '../pages/testUser'
import { storiesPage } from '../pages/storiesPage'

export default [
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/testPage',
    name: 'testPage',
    component: testPage
  },
  {
    path: '/testUser',
    name: 'testUser',
    component: testUser
  },
  {
    path: '/storiesPage',
    name: 'storiesPage',
    component: storiesPage
  }
]
