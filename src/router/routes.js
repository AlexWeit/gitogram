import { authPage } from '../pages/authPage'
import { feeds } from '../pages/feeds'
import { storiesPage } from '../pages/storiesPage'
import { userPage } from '../pages/userPage'
import { testPage } from '../pages/testPage'
import { testUser } from '../pages/testUser'

export default [
  {
    path: '/authPage',
    name: 'authPage',
    component: authPage
  },
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/storiesPage',
    name: 'storiesPage',
    component: storiesPage
  },
  {
    path: '/userPage',
    name: 'userPage',
    component: userPage
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
  }
]
