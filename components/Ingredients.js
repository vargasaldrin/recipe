import { useContext } from "react";
import { APIContext } from "../context/apiContext";
import Special from "./Special";

export default function Ingredients(props) {
  const { specials } = useContext(APIContext);
  const items = props.data;

  const list = items.map((item) => {
    const isSpecial = specials.find(
      (special) => special.ingredientId === item.uuid,
    );
    const showSpecial = isSpecial && <Special data={isSpecial} />;

    return (
      <li key={item.uuid}>
        <span>{item.name} </span>
        {showSpecial}
      </li>
    );
  });

  return <ul>{list}</ul>;
}
