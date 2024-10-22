import { redirect, type RouteObject, Navigate } from 'react-router-dom'

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
        path: 'users',
        lazy: async () => {
          const { Page } = await import('../pages/system/users')
          return { Component: Page }
        }
      },
      {
        path: 'roles',
        lazy: async () => {
          const { Page } = await import('../pages/system/roles')
          return { Component: Page }
        }
      },
      {
        path: 'permissions',
        lazy: async () => {
          const { Page } = await import('../pages/system/permissions')
          return { Component: Page }
        }
      }
    ]
  }
]
