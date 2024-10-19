import { RouterView } from './routes/index'
import type { RouteObject } from 'react-router-dom'

type PrAdminProps = {
  _routes?: RouteObject[]
}

export default (_props: PrAdminProps) => {
  const { _routes } = _props

  return <RouterView _routes={_routes} />
}
