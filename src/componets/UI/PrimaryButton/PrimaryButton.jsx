import React from 'react'

import s from './PrimaryButton.module.scss'

export default function PrimaryButton({ children, onclick, disabled }) {
  return (
    <button disabled={disabled} className={s.primary_btn} onClick={onclick}>
      {children}
    </button>
  )
}
