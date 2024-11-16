import { useEffect, useState } from "react";

export const Howtonotfetchapi = () => {
  const [apidata, setApidata] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => {
        setApidata(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <header>
        <h1>Let's Catch Pokemon</h1>
      </header>
      <ul>
        <li>
          <figure></figure>
        </li>
      </ul>
    </section>
  );
};
