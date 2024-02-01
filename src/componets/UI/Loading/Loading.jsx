import React from 'react'

import s from './Loading.module.scss'

export default function Loading() {
  return (
    <div className={s.lodaing}>
        <img src="./assets/img/svg/loading.svg" alt="Loading" width={100} height={100} />
    </div>
  )
}
