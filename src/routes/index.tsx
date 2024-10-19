import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Layout from '../layout/index'
import { routes } from './routes'

// 全局路由
const defaultRoutes: RouteObject[] = [
  {
    path: '/',
    loader: async () => {
      return redirect('/dashboard')
    }
  },
  {
    path: 'login',
    lazy: async () => {
      const { Page } = await import('../pages/login/login-index')
      return { Component: Page }
    }
  },
  {
    path: '*',
    lazy: async () => {
      const { Page } = await import('../pages/error/error-401')
      return { Component: Page }
    }
  }
]

// 创建路由视图
const RouterView = () => {
  const _routes: RouteObject[] = [{ Component: Layout, children: routes }]

  // 创建路由
  const router = createBrowserRouter([..._routes, ...defaultRoutes])

  return <RouterProvider router={router} />
}

export { RouterView }
