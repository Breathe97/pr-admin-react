import React from 'react'
import { Session } from '@toolpad/core'
import { useNotifications } from '@toolpad/core/useNotifications'

const useAuthentication = () => {
  const notifications = useNotifications()

  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456'
    }
  })

  const _authentication = () => {
    return {
      signIn: async () => {
        console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:`)
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456'
          }
        })
      },
      signOut: () => {
        setSession(null)
        notifications.show('Something great just happened!', { severity: 'success' })
      }
    }
  }

  const authentication = React.useMemo(_authentication, [])

  return { session, authentication }
}

export default useAuthentication
