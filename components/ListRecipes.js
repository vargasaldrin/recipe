import Link from "next/link";
import { useContext } from "react";
import { APIContext } from "../context/apiContext";
import styles from "../styles/listRecipes.module.css";

export default function ListRecipes(props) {
  const { recipes } = useContext(APIContext);

  const items = recipes.map((data) => {
    const image = `http://localhost:3001${data.images.small}`;
    const subDirectory = data.title.toLowerCase().replace(/ /g, "-");

    return (
      <tr className={styles.row} key={data.uuid}>
        <td>
          <img className={styles.image} src={image} />
        </td>
        <td>{data.title}</td>
        <td>{data.servings} servings</td>
        <td>{data.prepTime} minutes</td>
        <td>{data.cookTime} minutes</td>
        <td>
          <Link
            href={{
              pathname: "/recipe",
              query: { dataID: data.uuid },
            }}
            as={`/recipe/${subDirectory}`}
          >
            <button className={styles.button}>View Recipe</button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <table className={styles.container}>
      <thead className={styles.header}>
        <tr>
          <th></th>
          <th>Dish Name</th>
          <th>Servings</th>
          <th>Prep Time</th>
          <th>Cook Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}
