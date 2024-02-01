import React from 'react'

import s from './Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
        <a href="/" className={s.logo}>
            <img src="./assets/img/png/logo.png" alt="Logo icon" width={50} height={50}/>
            <span>Blackjack app</span>
        </a>
        <div className={s.links}>
            <a href="https://www.linkedin.com/in/ihor-vynohradnyi-b97b37153/" target='_blank' rel="noopener noreferrer">
                <img src="./assets/img/svg/linkedin.svg" alt="Logo icon" width={30} height={30}/>
                <span>Linkedin</span>
            </a>
            <a href="https://github.com/tonykrapatony/blackjack" target='_blank' rel="noopener noreferrer">
                <img src="./assets/img/svg/github.svg" alt="Logo icon" width={30} height={30}/>
                <span>Github</span>
            </a>
        </div>
    </header>
  )
}
