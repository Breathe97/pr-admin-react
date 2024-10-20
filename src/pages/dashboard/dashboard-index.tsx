import { Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import { useNotifications } from '@toolpad/core'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

export const Page = () => {
  const { mode, setMode } = useColorScheme()
  const notifications = useNotifications()

  const change = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  const ref = useRef(null)

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = async (isDarkMode) => {
    /**
     * Return early if View Transition API is not supported
     * or user prefers reduced motion
     */
    if (!ref.current || !document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsDarkMode(isDarkMode)
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDarkMode)
        change()
      })
    }).ready

    const { top, left, width, height } = ref.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const right = window.innerWidth - left
    const bottom = window.innerHeight - top
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom))

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <>
      <Button ref={ref} onClick={toggleDarkMode}>
        dashboard
      </Button>
      <div>{mode}</div>
      <Button onClick={() => notifications.show('Something great just happened!', { severity: 'success' })}>notifications</Button>
    </>
  )
}
