import CardList from "@/components/cardList/CardList";
import styles from "./page.module.css";
import getSongs from "@/Fetcher";

export default async function Home() {

  const song = await(getSongs())
  console.log(song)
  
  return (
    <div className={styles.page}>
      <CardList/>
      <div>{song.response.song.full_title}</div>
    </div>
  );
}
