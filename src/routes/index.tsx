import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { routes } from './routes'
import Layout from '../layout/index'
import { AppProvider, type Navigation } from '@toolpad/core'

// 默认路由
const defaultRoutes: RouteObject[] = [
  {
    path: '/',
    loader: async () => {
      return redirect('/login')
    }
  },
  {
    path: 'login',
    lazy: async () => {
      const { Page } = await import('../views/login/login-index')
      return { Component: Page }
    }
  },
  {
    path: '*',
    lazy: async () => {
      const { Page } = await import('../views/error/error-401')
      return { Component: Page }
    }
  }
]

const BRANDING = {
  title: 'PR云-管理平台'
}

// 创建路由视图
const RouterView = () => {
  const _routes: RouteObject[] = [{ Component: Layout, children: routes }]

  // 生成路由
  const router = createBrowserRouter([...defaultRoutes, ..._routes])

  const navigation: Navigation = [{ kind: 'header', title: '路由' }, ...routes]

  return (
    <AppProvider navigation={navigation} branding={BRANDING}>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export { RouterView }
