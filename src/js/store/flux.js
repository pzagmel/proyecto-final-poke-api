const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      infoRegister: [],
    },

    actions: {
      getPokemon: async (poke) => {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + poke, {
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ pokemon: data.sprites.front_default });
          });
      },
      getinfoRegister: (user) => {
        fetch(
          "https://3000-lukasoy-backendpokegym-veqmyydcg1p.ws-us84.gitpod.io/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: user,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log('data', data)
          });
      },
    },
  };
};

export default getState;
