const path = require("path");
const express = require("express");
const app = express();

const fs = require("fs");


let palabras = "queso";



//setting
app.set("PORT", process.env.PORT || 3000);


//File static
app.use(express.static(path.join(__dirname, "/public")));


// app.get("/entrada", (req, res) =>{
// 	res.send("Welcome");
// })

app.get("/:video", (req, res) =>{
	// console.log(__dirname);

	// res.send("holaa")
	// console.log(__dirname);
	console.log("visitoVideo");
	res.sendFile(__dirname + "/data.mp4"); 
	//El archivo lo tiene el que lo subió

	//Solucion 1:
})


// app.use(express.static(path.join(__dirname, "data.mp4")));

// app.get("/:video", (req, res) =>{
// 	console.log("Inicio")

// 	res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
// 	<title>Video</title>

// 	<link rel="icon" href="Home.ico">

// 	<link rel="stylesheet" type="text/css" href="index.css">

// 	<link rel="stylesheet" type="text/css" href="../data.txt">
// </head>
// <body>

// Aquí pondre el video

// <video src="" class="videoYT video" controls=""></video>

// 	<script type="text/javascript">

// 	document.write(data.txt);

// 		// const pal = ${palabras};
// 		// console.log(pal);
// 		//La variable no sabe que es la variable palabras

// 		// let video = new Blob([new Uint8Array(${palabras})], {type: "video/mp4"});
// 	 	// let url = URL.createObjectURL(video);

// 	 	// console.log(url);

// 	 	// const videoPunto = document.querySelector(".video");
// 	 	// videoPunto.setAttribute("src", url);

// 	</script>

// </body>
// </html>`);
// });



//Inicializar
const server = app.listen(app.get("PORT"), ()=>{
	console.log(`Servidor en ${app.get("PORT")}`);
})


//WebSockets
const socket = require("socket.io");
// const io = socket(server);

const io = socket(server, {maxHttpBufferSize: 1000000e8, pingTimeout: 960000})




io.on("connection", (client)=>{
	console.log("Nuevo cliente");


	client.on("enviarMensaje", data=>{

		io.emit("enviarMensaje", data);

	})


	client.on("urlBlob", data=>{

		// console.log(data + " servidor");

		console.log("servidor");


		fs.writeFile("data.mp4", data, error =>{
			if(error){
			console.log(error)
			}
		});

		// console.log("Creo el archivo");

		io.emit("urlBlob", "data");

		// io.emit("urlServer", id);




		//https://nodejs.org/api/url.html#urlcreateobjecturlblob

		// const {
		//   Blob,
		//   resolveObjectURL,
		// } = require('node:buffer');

		// const blob = new Blob([data], {type: "video/mp4"});
		// const id = URL.createObjectURL(blob);

		// // later...

		// const otherBlob = resolveObjectURL(id);
		// console.log(otherBlob.size + "recibido");

		// console.log(id);

		// io.emit("urlServer", id);




		// console.log(typeof data);

		// let file = new File([data], 'yt5s.com-Combat gods.mp4', { type: "video/mp4" });

		// console.log(typeof file);

		// let video = new Blob([new Uint8Array(data)], {type: "video/mp4"});
	 // 	let url = URL.createObjectURL(video);


		// console.log(url);

		// console.log(typeof data); //object

		// palabras = data;

		// console.log(palabras);

		// console.log(url);


	})


	client.on("videoYT", data =>{
		console.log("serverRecibe")
		io.emit("videoYT", data);
	})

	client.on("mensaje", data=>{
		console.log(data);
	})


	client.on("enviarVideo", data =>{
		// console.log(data);

		// io.to(socketId).emit("enviarVideo", data);
		//https://socket.io/docs/v3/emit-cheatsheet/
		//Doraemon op sub español
		//La información se recibe correctamente, pero debo evitar que se envie al
		//usuario que envía el vídeo para que no cargue dos veces

		// console.log("servidorRecibido");
		// console.log("serverVideo");
		// console.log(data);
		client.broadcast.emit("enviarVideo", data);
	})

	client.on("consola", data =>{
		console.log(data);
	});

	client.on("localVideo", data =>{
		console.log("localvideo");
		io.emit("localVideo", data);
	})

	client.on("changeVideo", data =>{



		console.log(data);
		io.emit("changeVideo", data)
	})

	client.on("elemento", data =>{
		console.log(data);
		// io.emit("changeVideo", data)
	})

	client.on("changate", data =>{
		console.log("serverRecibe")
		client.broadcast.emit("changate", data);
	})

	// client.on("cargarVideo", data =>{
	// 	console.log(data);
	// 	io.emit("cargarVideo", data);
	// })
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