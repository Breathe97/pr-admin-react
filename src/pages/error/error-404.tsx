import { useRouteError } from 'react-router-dom'

export const Page = () => {
  const error: any = useRouteError()
  console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:error`, error)

  return (
    <div id="error-page">
      <h1>Oops! 404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}
