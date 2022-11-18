const path = require("path");
const express = require("express");
const app = express();



//setting
app.set("PORT", process.env.PORT || 3000);


//File static
app.use(express.static(path.join(__dirname, "/public")));



//Inicializar
const server = app.listen(app.get("PORT"), ()=>{
	console.log(`Servidor en ${app.get("PORT")}`);
})


//WebSockets
const socket = require("socket.io");
const io = socket(server);

io.on("connection", (client)=>{
	console.log("Nuevo cliente");


	client.on("enviarVideo", data =>{
		console.log(data);
		io.emit("enviarVideo", data);
	})
})

















// // const http = require("http");

// // const servidor = http.createServer((req, res)=>{

// // 	console.log(res);

// // 	res.end("Hola mundo");

// // });


// // servidor.listen(3000, ()=>{
// // 	console.log("Servidor Iniciado");
// // });

// const archivo = document.querySelector(".archivo");

// function cargar(ar){

// 	// console.log(ar);

// 	 const reader = new FileReader();
// 	 reader.readAsArrayBuffer(ar);
// 	 reader.addEventListener("load", e=>{
// 	 	// console.log(e);
// 	 	// console.log(e.currentTarget.result);

// 	 	let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});
// 	 	let url = URL.createObjectURL(video);

// 	 	// console.log(typeof url);


// 	 	// const create = document.createElement("VIDEO");
// 	 	// create.setAttribute("controls", "");
// 	 	// create.setAttribute("src", url);
// 	 	// document.body.appendChild(create);

// 	 	const webVideo = document.querySelector(".video");

// 	 	// console.log(video);

// 	 	webVideo.setAttribute("src", url);
	 	

// 	 })

// }

// archivo.addEventListener("change", e =>{
// 	cargar(e.target.files[0]);
// })