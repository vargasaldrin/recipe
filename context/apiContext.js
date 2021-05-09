import React, { useState, useEffect } from "react";
const APIContext = React.createContext();

function APIProvider(props) {
  const [recipes, setRecipes] = useState([]);
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));

    fetch("http://localhost:3001/specials")
      .then((response) => response.json())
      .then((data) => setSpecials(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <APIContext.Provider
      value={{
        recipes,
        specials,
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
}

export { APIContext, APIProvider };
