const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			nombre:"",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: (email, pass) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

            register:(nombre, apellido, email, pass, run, telefono, rol) =>{
				const store = getStore()

				var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "nombre": nombre,
  "apellido": apellido,
  "email": email,
  "password": pass,
  "rut": run,
  "telefono": telefono,
  "rol_profesor": rol,
  "nivel": "",
  "comentario": ""
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://3000-lukasoy-backendpokegym-gyi5e2do75u.ws-us84.gitpod.io/register", requestOptions)
  .then(response => response.json())
  .then(result => setStore({nombre:result.nombre}))
  .catch(error => console.log('error', error));
			
		 return true
           },

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
