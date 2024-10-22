import { useEffect, memo } from 'react'

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
const RouterView = memo(() => {
  const _routes: RouteObject[] = [{ Component: Layout, children: routes }]
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:22`)

  const aa = () => {
    console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:aa`)
  }
  useEffect(aa, [])

  // 创建路由
  const router = createBrowserRouter([..._routes, ...defaultRoutes])

  return <RouterProvider router={router} />
})

export { RouterView }
