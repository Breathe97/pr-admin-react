import type { RouteObject } from 'react-router-dom'
import type { NavigationItem } from '@toolpad/core'
import DashboardIcon from '@mui/icons-material/Dashboard'

type Route = RouteObject & NavigationItem

export const routes: Route[] = [
  {
    path: 'home',
    title: 'Home',
    icon: <DashboardIcon />,
    lazy: async () => {
      const { Page } = await import('../views/home/home-index')
      return { Component: Page }
    }
  },
  {
    path: 'system',
    title: 'System',
    icon: <DashboardIcon />,
    lazy: async () => {
      const { Page } = await import('../views/system/system-index')
      return { Component: Page }
    }
  }
]
