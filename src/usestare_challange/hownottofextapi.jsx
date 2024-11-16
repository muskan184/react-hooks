import { useEffect, useState } from "react";

export const Howtonotfetchapi = () => {
  const [apidata, setApidata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => {
        setApidata(data);
        setLoading(!loading);
      })
      .catch((error) => {
        console.log(error);
        seterror(error);
        setLoading(false);
      });
  }, []);

  console.log(apidata);
  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error:{error.message}</h1>
      </div>
    );
  }

  if (apidata) {
    return (
      <section>
        <header>
          <h1>Let's Catch Pokemon</h1>
        </header>
        <ul>
          <li>
            <figure>
              <img
                src={apidata.sprites.other.dream_world.front_default}
                alt="{apidata.name}"
              />
            </figure>
            {apidata.name}
            <div>
              <p>{apidata.height}</p>
              <p>{apidata.weight}</p>
              <p>{apidata.stats[5].base_stat}</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};
