import { FC } from 'react'
interface RouteInterface {
  path: string
  layout: boolean
  authOnly: boolean
  params?: Array<string>
  hasSubItens?: boolean
  component: string
}

const routes: Array<RouteInterface> = [
  {
    path: '',
    layout: true,
    authOnly: false,
    component: 'home'
  },
  {
    path: 'projects',
    layout: true,
    authOnly: false,
    params: ['id'],
    hasSubItens: true,
    component: 'project'
  },
  {
    path: 'experience',
    layout: true,
    authOnly: false,
    params: ['company'],
    hasSubItens: true,
    component: 'experience'
  },
  {
    path: 'contact',
    layout: true,
    authOnly: false,
    component: 'contact'
  }
]

export default routes
