import { AppProvider } from '@toolpad/core/react-router-dom'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import { Outlet } from 'react-router-dom'

import { branding } from './config/branding'
import { navigation } from './config/navigation'

const Layout = () => {
  return (
    <AppProvider branding={branding} navigation={navigation}>
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  )
}

export default Layout
