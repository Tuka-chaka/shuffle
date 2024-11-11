'use client'

import { useState } from 'react';
import { CardParameters } from '../../CardParameters'
import Card from '../card/Card';
import Popup from '../popup/Popup';
import styles from './CardList.module.css'

const CardList = ({songs} : {songs:Array<string>}) => {

    const [isPopupVisible, setIsPopupVisible] = useState(false)

    const onCardClick = (name: string) => {
        navigator.clipboard.writeText(name);
        setIsPopupVisible(true)
        setTimeout(() => setIsPopupVisible(false), 1000)
    }

    return(
        <>
        <div className={styles.cardList}>
            {CardParameters.map((params, index) => <Card onClick={onCardClick} key={params.tags} name={params.tags} icon={params.icon} songTitle={songs[index]}/>)}
        </div>
        <Popup isVisible={isPopupVisible}/>
        </>
    );
};

export default CardList;
