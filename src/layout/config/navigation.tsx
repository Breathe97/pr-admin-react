import { Navigation } from '@toolpad/core/AppProvider'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import GitHubIcon from '@mui/icons-material/GitHub'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import GroupIcon from '@mui/icons-material/Group'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import DataObjectIcon from '@mui/icons-material/DataObject'
import ApartmentIcon from '@mui/icons-material/Apartment'
import InsightsIcon from '@mui/icons-material/Insights'

export const navigation: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    pattern: 'analysis',
    icon: <DashboardIcon />
  },
  {
    segment: 'analysis',
    title: 'Analysis',
    action: <>aaaa</>,
    pattern: 'aaaa',
    icon: <InsightsIcon />,
    children: [
      {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />
      },
      {
        segment: '222',
        title: 'Home2',
        icon: <DashboardIcon />
      }
    ]
  },
  {
    segment: 'companys',
    title: 'Companys',
    icon: <ApartmentIcon />
  },
  {
    kind: 'divider'
  },
  {
    segment: 'system',
    title: 'System',
    icon: <SettingsSuggestIcon />,
    children: [
      {
        segment: 'users',
        title: 'Users',
        icon: <GroupIcon />
      },
      {
        segment: 'roles',
        title: 'Roles',
        icon: <SwitchAccountIcon />
      },
      {
        segment: 'permissions',
        title: 'Permissions',
        icon: <VpnKeyIcon />
      },
      {
        title: 'Logs',
        pattern: 'logs',
        icon: <DataObjectIcon />
      }
    ]
  }
  // {
  //   kind: 'divider'
  // },
  // {
  //   kind: 'header',
  //   title: 'about'
  // },
  // {
  //   title: 'GitHub（Breathe97）',
  //   pattern: 'about',
  //   icon: <GitHubIcon />
  // }
]
