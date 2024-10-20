import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import { Outlet } from 'react-router-dom'

import { branding } from './config/branding'
import { navigation } from './config/navigation'

import Search from './components/Search'
import SidebarFooter from './components/SidebarFooter'
import useAuthentication from './hooks/useAuthentication'

const Layout = () => {
  const { session, authentication } = useAuthentication()

  return (
    <AppProvider branding={branding} navigation={navigation} session={session} authentication={authentication}>
      <DashboardLayout slots={{ toolbarActions: Search, sidebarFooter: SidebarFooter }}>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  )
}

export default Layout
