import jwt_decode from "jwt-decode";

const getState = ({
  getStore,
  getActions,
  setStore
}) => {
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
        console.log("pokemon", poke);
        fetch("https://pokeapi.co/api/v2/pokemon/" + poke, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({
              pokemon: data.sprites.front_default
            });
          });
      },
      
      logout:() =>{
       sessionStorage.removeItem("token");
       console.log("login out");
       setStore({token:null});
       window.location.href = "/";
      },
      login: (MAIL, PASS, rememberMe) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Credentials", "*");

        fetch(

            "https://3000-lukasoy-backendpokegym-38mr70hus0e.ws-us85.gitpod.io/login", {
              method: "POST",
              headers: myHeaders,
              body: JSON.stringify({
                email: MAIL,
                password: PASS
              }),
              redirect: "follow",
            }
          )
          .then((response) => response.json())
          .then((result) => {
            if (result.status == 200) {
               if (rememberMe) {
                 if (typeof Storage !== "undefined") {
                  localStorage.setItem("token", result.token);
                } else {
                  console.log("LocalStorage no soportado en este navegador");
                } 
              } else {
                if (typeof Storage !== "undefined") {
                  sessionStorage.setItem("token", result.token);
                } else {
                  console.log("sessionStorage no soportado en este navegador");
                } 
              }
              setStore({
                userInfo: jwt_decode(result.token).sub,
                login: true,
                token: result.token,
              });
            } else {
              console.log("result.msg", result.msg);
            }
          })
          .catch((error) => console.log("error en login", error));
      },

      tokenValidation: async (ruta) => {
        let token = "";
        let retorno=null;
        if (typeof localStorage.getItem("token") == "string") {
          token = localStorage.getItem("token");
        } else if (typeof sessionStorage.getItem("token") == "string") {
          token = sessionStorage.getItem("token");
        }
        if (token !== "") {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token}`);
          try {
            await fetch(
                "https://3000-lukasoy-backendpokegym-38mr70hus0e.ws-us85.gitpod.io/token", {
                  method: "POST",
                  headers: myHeaders,
                  redirect: "follow",
                }
              )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                if (data.msg == "token valido") {
                  const user = jwt_decode(token).sub;
                  setStore({
                    userInfo: user,
                    login: true,
                    token: token,
                  });
                  if (user.rol) {
                    console.log('sale por user.rol', )
                    if (ruta != "/perfilprofe") retorno= "/perfilprofe";
                    console.log('se pasa perfilprofe en rol')
                  } else if (ruta != "/perfilcliente") retorno= "/perfilcliente";
                } else {
                  retorno= "/login";
                }
              });
          } catch (e) {
            setStore({
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
            });
            localStorage.clear();
            sessionStorage.clear();

            if (ruta != "/login") retorno= "/login";
          }
        } else {
          if (ruta != "/login") retorno= "/login";
        }
        return retorno;
      },

      getinfoRegister: async (user) => {
        fetch(
            "https://3000-lukasoy-backendpokegym-38mr70hus0e.ws-us85.gitpod.io/register", {
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
            } else if (data.status == 400) {
              alert(data.msg);
            }

            //recibo tokene y debo guardarlo en store, luego desencriptarlo
          })
          .catch((error) => console.log("error", error));
      },
    },
    postfichaprofe:()=>{

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${store.token}`);
      /* bearer tiene que llamar el token delrol:true de user para que pueda editar la ficha segun id del rol:false */
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        id: "",
        id_usuario: "",
        peso: "",
        porcentaje_grasa: "",
        porcentaje_musculo: "",
        nivel: ""
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    useEffect(()=>{
      fetch("https://3000-lukasoy-backendpokegym-38mr70hus0e.ws-us85.gitpod.io/ficha", requestOptions)
      .then(response => response.json())
      .then(data => {console.log(data);
      });
    });

    },
  };
};
export default getState;
