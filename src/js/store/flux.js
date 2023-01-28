const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      infoRegister: [],
    },

    login: (email, pass) => {
      /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
      login: () => {

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
            redirect: "follow",
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data);
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
