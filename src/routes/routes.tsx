import type { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: 'dashboard',
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
    lazy: async () => {
      const { Page } = await import('../pages/system/system-index')
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
