import Search from './Search'
import { DarkMode } from './DarkMode'

const ToolbarActions = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Search />
        <DarkMode />
      </div>
    </>
  )
}

export default ToolbarActions
