import React, { useEffect, useState } from 'react'
import { fetchDeck, getCards } from '../../api/fetch'

import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'

import s from './Game.module.scss'
import { countPoints, winnerCheck } from '../../helpers/helpers';
import SecondaryButton from '../UI/SecondaryButton/SecondaryButton';

export default function Game({ loading, setLodaing }) {
    const [deckId, setDeckId] = useState('');
    const [winner, setWinner] = useState('');
    const [disabled, setDisabled] = useState(false);


    const [playerCards, setPlayerCards] = useState([]);
    const [pcCards, setPcCards] = useState([]);

    const [playerPoints, setPlayerPoints] = useState(0);
    const [pcPoints, setPcPoints] = useState(0);

    const getPlayerCard = async (deck_Id, count) => {
        try {
            const res = await getCards(deck_Id, count);
            let cards = res.cards.map((card) => (
                card.image
            ))
            setPlayerCards((prev) => ([...prev, ...cards]))
            setPlayerPoints((prev) => (prev + countPoints(res)));
        } catch(error) {
            console.log(error);
        }
    }

    const getPcCards = async (deck_Id, count) => {
        try {
            const res = await getCards(deck_Id, count);
            let cards = res.cards.map((card) => (
                card.image
            ))
            setPcCards((prev) => ([...prev, ...cards]));
            setPcPoints((prev) => (prev + countPoints(res)));
        } catch(error) {
            console.log(error);
        }
    }

    const newGameHandler = async () => {
        setLodaing(!loading)
        try {
            const res = await fetchDeck();
            setDeckId(res.deck_id);
            setTimeout(() => {
                setLodaing(false);
            }, 2000);

            setDisabled(false);
            setWinner('');
            setPlayerCards([]);
            setPcCards([]);
            setPlayerPoints(0);
            setPcPoints(0);

            getPlayerCard(res.deck_id, 2);
            getPcCards(res.deck_id, 1);
        } catch(error) {
            console.log(error);
        }
    }

    const getMore = async () => {
        await getPlayerCard(deckId, 1);
    }

    const enoughHandler = async () => {
        setDisabled(true);
        if (pcPoints <= playerPoints && pcPoints < 21) {
            await getPcCards(deckId, 1);   
        } else {
            await winnerCheck(playerPoints, pcPoints, setWinner, setDisabled, true);
        }
    }

    useEffect(() => {
        newGameHandler()
    }, [])

    useEffect(() => {
        if (pcCards.length > 1) {
            enoughHandler();
        }
    }, [pcPoints, pcCards])

    useEffect(() => {
        winnerCheck(playerPoints, pcPoints, setWinner, setDisabled, false)
    }, [playerPoints, pcPoints])
    
    return (
        <div className={s.game_container}>
            <div className={s.winner}>
                {winner && 
                    <>
                        <PrimaryButton onclick={newGameHandler}>New game</PrimaryButton>
                        <p>Winner: {winner}</p>
                    </>
                }
            </div>
            {!loading && 
                <>
                    <div className={s.pc_block}>
                        <p><span>PC points:</span> {pcPoints}</p>
                        <p><span>PC cards:</span></p>
                        <ul>
                            {
                                pcCards && pcCards.length > 0 && pcCards.map((item, index) => (
                                    <li key={index}>
                                        <img src={item} alt={item} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={s.player_block}>
                        <p><span>Player points:</span> {playerPoints}</p>
                        <p><span>Player cards:</span></p>
                        <ul>
                            {
                                playerCards && playerCards.length > 0 && playerCards.map((item, index) => (
                                    <li key={index}>
                                        <img src={item} alt={item} />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={s.btns}>
                            <PrimaryButton disabled={disabled} onclick={getMore}>More</PrimaryButton>
                            <SecondaryButton disabled={disabled} onclick={enoughHandler}>Enough</SecondaryButton>
                        </div>
                    </div>                
                </>
            }
        </div>
    )
}
