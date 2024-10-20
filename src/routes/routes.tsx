import type { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: 'dashboard',
    index: true,
    lazy: async () => {
      const { Page } = await import('../pages/dashboard/dashboard-index')
      return { Component: Page }
    }
  },
  {
    path: 'home',
    lazy: async () => {
      const { Page } = await import('../pages/home/home-index')
      return { Component: Page }
    }
  },
  {
    path: 'system',
    children: [
      {
        index: true,
        path: 'users',
        lazy: async () => {
          const { Page } = await import('../pages/system/system-index')
          return { Component: Page }
        }
      },
      {
        path: 'roles',
        lazy: async () => {
          const { Page } = await import('../pages/system/system-index')
          return { Component: Page }
        }
      },
      {
        path: 'permissions',
        lazy: async () => {
          const { Page } = await import('../pages/system/system-index')
          return { Component: Page }
        }
      },
      {
        path: 'logs',
        lazy: async () => {
          const { Page } = await import('../pages/system/system-index')
          return { Component: Page }
        }
      }
    ]
  },
  {
    path: '*',
    lazy: async () => {
      const { Page } = await import('../pages/error/error-401')
      return { Component: Page }
    }
  }
]
