import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";

import { APIContext } from "../../context/apiContext";
import Directions from "../../components/Directions";
import Ingredients from "../../components/Ingredients";
import styles from "../../styles/recipe.module.css";

export default function Recipe(props) {
  const { recipes } = useContext(APIContext);
  const router = useRouter();
  const {
    query: { dataID },
  } = router;
  const food = recipes.find((data) => data.uuid === dataID);
  const foodImage = `http://localhost:3001${food.images.medium}`;

  return (
    <div>
      <Head>
        <title>😋 Recipe Provider 3000 😋</title>
      </Head>

      <Link href="/">
        <button className={styles.back}>Back to Home</button>
      </Link>

      <main className={styles.container}>
        <img src={foodImage} />
        <h1>{food.title}</h1>
        <h2>{food.description}</h2>
        <div className={styles.subInfo}>
          <h3>Servings:</h3>
          <p>{food.servings} servings</p>

          <h3>Prep Time:</h3>
          <p>{food.prepTime} minutes</p>
          <h3>Cook Time:</h3>
          <p>{food.cookTime} minutes</p>
          <h3>Ingredients: </h3>
          <Ingredients data={food.ingredients} />
          <h3>Directions</h3>
          <Directions data={food.directions} />
        </div>
      </main>
    </div>
  );
}
