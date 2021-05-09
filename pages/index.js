import Head from "next/head";
import ListRecipes from "../components/ListRecipes";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>😋 Recipe Provider 3000 😋</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>😋 Yummy Food Recipes 😋</h1>
        <ListRecipes />
      </main>
    </div>
  );
}
