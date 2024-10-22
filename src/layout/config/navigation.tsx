import { Navigation } from '@toolpad/core/AppProvider'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import GroupIcon from '@mui/icons-material/Group'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import { Chip } from '@mui/material'

export const navigation: Navigation = [
  {
    segment: 'dashboard',
    pattern: 'dashboard',
    title: 'Dashboard',
    action: <Chip label={7} color="primary" size="small" />,
    icon: <DashboardIcon />
  },
  {
    segment: 'home',
    pattern: 'home',
    title: 'Home',
    icon: <DashboardIcon />
  },
  {
    kind: 'divider'
  },
  {
    segment: 'system',
    title: 'System',
    pattern: 'system/',
    icon: <SettingsSuggestIcon />,
    children: [
      {
        segment: 'users',
        pattern: 'users',
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
      }
    ]
  }
]
