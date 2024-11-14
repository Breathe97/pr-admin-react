import { TextField } from '@mui/material'
import { useState } from 'react'
import { uuid, randomName } from 'pr-tools'

export const highlight = (_text: string, _keys: string[], _options: { flags?: 'g' | 'gi'; style?: string } = {}) => {
  const keys = _keys.filter((val) => val !== '')
  if (keys.length === 0) return _text
  const options = { flags: 'gi', style: 'text-decoration: underline;text-decoration-color: red;text-underline-offset: 0.2em;', ..._options }
  const { flags, style } = options
  const key_str = keys.join('|')
  const reg = new RegExp(`(${key_str})`, flags)
  const arr = _text.split(reg)
  const endArr = []
  for (const val of arr) {
    const fall = reg.test(val)
    const str = fall ? `<span style="${style}">${val}</span>` : val
    endArr.push(str)
  }
  const str = endArr.join('')
  return str
}

const text = `${uuid()}${randomName(8, 20)}`

export const Page = () => {
  const [key, set_key] = useState('2')

  return (
    <>
      <TextField id="outlined-basic" label="关键字" onInput={(e: any) => set_key(e.target.value)} />
      <div style={{ padding: 20 }} dangerouslySetInnerHTML={{ __html: highlight('123456', ['3', '5', key]) }}></div>
    </>
  )
}
