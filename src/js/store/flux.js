import { startTransition } from "react";
import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      infoRegister: [],
      userInfo: {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        telefono: "",
        rut: "",
        rol: null,
      },
      login: false,
      token: "",
    },

    actions: {
      getPokemon: (poke) => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + poke, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ pokemon: data.sprites.front_default });
          });
      },

      logout:() =>{
       sessionStorage.removeItem("token");
       console.log("login out");
       setStore({token:null});
      },
      login: (MAIL, PASS) => {
        const store = getStore();

        fetch(
          "https://3000-lukasoy-backendpokegym-veqmyydcg1p.ws-us84.gitpod.io/login",
          {
            method: "POST",
            headers: myHeaders,
            body: {},
            redirect: "follow",
          }
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ login: result });
            window.location.href = "/";
          })
          .catch((error) => console.log("error", error));
      },

      getinfoRegister: async (user) => {
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
            sessionStorage.setItem("token", data.token);
            if (data.status == 200) {
              setStore({
                userInfo: jwt_decode(data.token).sub,
                login: true,
                token: data.token,
              });
            }else if (data.status == 400){
              alert (data.msg)
            }
            
            //recibo tokene y debo guardarlo en store, luego desencriptarlo
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
