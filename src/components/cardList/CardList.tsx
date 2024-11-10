import { CardParameters } from '../../CardParameters'
import Card from '../card/Card';
import styles from './CardList.module.css'

const CardList = () => {
  return(
    <div className={styles.cardList}>
        {CardParameters.map(params => <Card key={params.tags} name={params.tags} icon={params.icon} songTitle="title"/>)}
    </div>
  );
};

export default CardList;
