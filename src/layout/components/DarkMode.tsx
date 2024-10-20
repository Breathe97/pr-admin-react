import { Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import { useRef } from 'react'
import { flushSync } from 'react-dom'

export const DarkMode = () => {
  const { mode, setMode } = useColorScheme()

  const ref = useRef<any>(null)

  const changeMode = async () => {
    if (ref.current === null || !document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    await document.startViewTransition(() => {
      flushSync(() => {
        setMode(mode === 'dark' ? 'light' : 'dark')
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
      { duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
    )
  }

  return (
    <>
      <Button ref={ref} onClick={changeMode}>
        {mode}
      </Button>
    </>
  )
}
