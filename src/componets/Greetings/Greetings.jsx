import React from 'react'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'

import s from './Greetings.module.scss'

export default function Greetings({ onclick }) {
    return (
        <div className={s.greetings}>
            <h3>Hello! </h3>
            <p>Welcome to the Blackjack app.</p>
            <p>Here you can play the simplest version of Blackjack. The <a href="https://deckofcardsapi.com/" target='_blank' rel="noopener noreferrer">Deck of Cards API</a> was used for development. To get started, click the Begin Game button below and then click New game.</p>
            <PrimaryButton onclick={onclick}>Begin game</PrimaryButton>
        </div>
    )
}
