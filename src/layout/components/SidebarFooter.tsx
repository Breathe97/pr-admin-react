import { Typography } from '@mui/material'
import { SidebarFooterProps } from '@toolpad/core/DashboardLayout'

const SidebarFooter = ({ mini }: SidebarFooterProps) => {
  return (
    <Typography variant="caption" sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {mini ? '© MUI' : `© ${new Date().getFullYear()} Made with love by MUI`}
    </Typography>
  )
}

export default SidebarFooter
