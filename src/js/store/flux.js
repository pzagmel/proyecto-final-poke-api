const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      infoRegister: [],
      login:[]
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
      login: (MAIL, PASS) => {
        const store = getStore()
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://3000-lukasoy-backendpokegym-veqmyydcg1p.ws-us84.gitpod.io/login", requestOptions)
          .then(response => response.json())
          .then(result => {setStore({login:result})
          window.location.href = "/";
          })          
          .catch(error => console.log('error', error));
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
