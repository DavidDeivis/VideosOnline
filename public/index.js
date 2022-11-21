const socket = io();
//""https://proyecto-service.onrender.com""
let reproducir;

const archivo = document.querySelector(".archivo");

let cargado = false;

function cargar(ar){

	// console.log(ar);

	// socket.emit("enviarVideo", ar);




	 const reader = new FileReader();
	 reader.readAsDataURL(ar);

	 reader.addEventListener("load", e=>{

	 	// console.log(e.currentTarget.result);

	 	//console.log(e.currentTarget.result);


	 	// const oman = e.currentTarget.result;

	 	// let tenten = JSON.parse(oman);


	 	// console.log(typeof tenten);
	 	// console.log(tenten);
	

	 	// let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});

	 	// console.log(e.currentTarget.result);
	 	// console.log(typeof e.currentTarget.result); //Es un string
	 	// let url = URL.createObjectURL(video);

	 	

		// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", e.currentTarget.result);

		// let novedad = {"primero": e.currentTarget.result};






		const webVideo = document.querySelector(".video");
		webVideo.setAttribute("src", e.currentTarget.result);

		cargado = true;

	 	socket.emit("enviarVideo", e.currentTarget.result);

	 	



	 	// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", url);

	 })

}


archivo.addEventListener("change", e =>{
	

	let objetivo = e.target.files[0];

	// console.log(objetivo);

	// console.log(e.target.files[0])

	// socket.emit("changate", e.target.files[0]);



	cargar(objetivo);

})

socket.on("changate", data =>{

	console.log("CargandoVideo")


	
	 let file = new File([data], 'yt5s.com-Combat gods.mp4', { type: "video/mp4" })
	 // console.log(file);
	 

	 const reader = new FileReader();
	 reader.readAsDataURL(file);

	 reader.addEventListener("load", e=>{

	

	 	// console.log("ere");

	 	const webVideo = document.querySelector(".video");
		webVideo.setAttribute("src", e.currentTarget.result);



	});

});

let webVideo;

socket.on("changeVideo", data=>{

	// console.log(data);

	let video = new Blob([new Uint8Array(data)]);
	// console.log(video);
	let url = URL.createObjectURL(video);

	const nuevo = url.split("/");

	let navegando = nuevo[2];

	const videoProcesado = nuevo[0] + "//" + navegando + "/" + nuevo[3];

	webVideo = document.querySelector(".video");
	webVideo.setAttribute("src", videoProcesado);

	// document.write(webVideo.getAttribute("src"));

	// socket.emit("elemento", webVideo); 

	// console.log("a");

	
})

socket.on("cargarVideo", data=>{
	console.log("cargarVideo2");
	cargar(data);
})

socket.on("enviarVideo", data=>{
	// console.log(data);
	// console.log(data.substring(12, 26));

	// data = data.split("/");
	// console.log(data);

	// let navegador = data[2];
	// console.log(navegador);

	// const videoProcesado = data[0] + "//" + "192.168.0.105:3000" + "/" + data[3];

	// console.log(videoProcesado);

	// console.log(data);

	// let video = new Blob([new Uint8Array(data), {type: "video/mp4"}]);
	// let url = URL.createObjectURL(video); 

	

	// const nuevo = url.split("/");

	// let navegando = nuevo[2];

	// const videoProcesado = nuevo[0] + "//" + navegando + "/" + nuevo[3];

	// console.log(data);

	console.log("cargandoLocal");

	if(!cargado){
		const webVideo = document.querySelector(".video");
		webVideo.setAttribute("src", data);
	}
		
})

let localV;

addEventListener("keydown", e=>{

	// console.log(e.keyCode);

	if(e.keyCode == 84){ //tecla "T"
		socket.emit("localVideo", "yt5s.com-Combat gods.mp3");
	}

	if(e.keyCode == 80){ //tecla "T"
		localV = document.querySelector(".video");
		localV.setAttribute("src", data);
	}
})

socket.on("localVideo", data=>{
	console.log("locandovideo");
	localV = document.querySelector(".video");
	localV.setAttribute("src", data);
})