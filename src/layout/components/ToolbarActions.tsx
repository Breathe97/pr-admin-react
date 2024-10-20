import Search from './Search'
import Github from './Github'
import { DarkMode } from './DarkMode'

const ToolbarActions = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Search />
        <DarkMode />
        <Github />
      </div>
    </>
  )
}

export default ToolbarActions
