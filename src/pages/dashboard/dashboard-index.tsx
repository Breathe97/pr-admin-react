import { Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

export const Page = () => {
  const { mode, setMode } = useColorScheme()
  return (
    <>
      <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>dashboard</Button>
      <div>{mode}</div>
    </>
  )
}
