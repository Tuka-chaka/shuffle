import CardList from "@/components/cardList/CardList";
import styles from "./page.module.css";
import getSongs from "@/Fetcher";

export default async function Home() {

  const songs = await(getSongs())
  
  return (
    <div className={styles.page}>
      <h1 className={styles.appName}>SHUFFLE</h1>
      <CardList songs={songs}/>
    </div>
  );
}
