import { CardParameters } from '../../CardParameters'
import Card from '../card/Card';
import styles from './CardList.module.css'

const CardList = ({songs} : {songs:Array<string>}) => {
  return(
    <div className={styles.cardList}>
        {CardParameters.map((params, index) => <Card key={params.tags} name={params.tags} icon={params.icon} songTitle={songs[index]}/>)}
    </div>
  );
};

export default CardList;
