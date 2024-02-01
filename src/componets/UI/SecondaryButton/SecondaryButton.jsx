import React from 'react'

import s from './SecondaryButton.module.scss'

export default function SecondaryButton({ children, onclick, disabled }) {
  return (
    <button disabled={disabled} className={s.primary_btn} onClick={onclick}>
      {children}
    </button>
  )
}
