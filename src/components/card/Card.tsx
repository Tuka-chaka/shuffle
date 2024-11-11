'use client'

import { ReactNode } from "react";
import Marquee from "react-fast-marquee";
import styles from './Card.module.css'

interface CardProps {
    name: string
    songTitle: string
    icon: ReactNode
    onClick: (name: string) => void
}

const Card = ({name, songTitle, icon, onClick} : CardProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardInfo} onClick={() => onClick(songTitle)}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.spacerLine}></div>
            <div className={styles.songTitle}>
                {songTitle}
            </div>
            <div className={styles.spacerLine}></div>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
        </div>
        <Marquee className={styles.cardName}>
            {name}
        </Marquee>
    </div>
  );
};

export default Card;
