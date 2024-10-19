import type { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: 'system/system-index',
    lazy: async () => {
      const { Page } = await import('../views/system/system-index')
      return { Component: Page }
    }
  }
]
