import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import { Outlet } from 'react-router-dom'

import { branding } from './config/branding'
import { navigation } from './config/navigation'

import SidebarFooter from './components/SidebarFooter'
import useAuthentication from './hooks/useAuthentication'
import { createTheme } from '@mui/material'
import ToolbarActions from './components/ToolbarActions'

const Layout = () => {
  const { session, authentication } = useAuthentication()
  const darkTheme = createTheme({
    colorSchemes: {
      dark: true,
      light: true
    }
  })

  return (
    <AppProvider theme={darkTheme} branding={branding} navigation={navigation} session={session} authentication={authentication}>
      <DashboardLayout slots={{ toolbarActions: ToolbarActions, sidebarFooter: SidebarFooter }}>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  )
}

export default Layout
