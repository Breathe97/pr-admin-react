import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

// 默认路由
const defaultRoutes: RouteObject[] = [
  {
    path: '/',
    loader: async () => {
      return redirect('/login/login-index')
    }
  },
  {
    path: 'login/login-index',
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

// 正常路由
const routes: RouteObject[] = [
  {
    path: 'home/home-index',
    lazy: async () => {
      const { Page } = await import('../pages/home/home-index')
      return { Component: Page }
    }
  }
]

// console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:router`, router)
type RouterViewProps = {
  _routes?: RouteObject[]
}

const RouterView = (props: RouterViewProps) => {
  const { _routes = [] } = props
  // 生成路由
  const router = createBrowserRouter([...defaultRoutes, ...routes, ..._routes])

  return <RouterProvider router={router} />
}

export { RouterView }
