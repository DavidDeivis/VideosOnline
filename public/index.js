const socket = io();
//""https://proyecto-service.onrender.com""
let reproducir;


const archivo = document.querySelector(".archivo");

let cargado = false;



const linkVideo = document.querySelector(".linkVideo");
const button = document.querySelector(".buttonVideo");
const capaVideo = document.querySelector(".capaVideo");

// button.addEventListener("click", e=>{
// 	const link = linkVideo.value;
// 	// console.log(link);

// 	//https://www.youtube.com/watch?v=_isUaZDReu8
// 	//<iframe width="560" height="315" src="https://www.youtube.com/embed/_isUaZDReu8?start=90" 
// 	//title="YouTube video player" frameborder="0" 
// 	//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
// 	//picture-in-picture" allowfullscreen></iframe>
// 	//60 (segundos) = 1:00 (tiempo en el vídeo) // 

// 	const textoYT = "https://www.youtube.com/embed/";

// 	// https://www.youtube.com/watch?v=oEDiwZ5_TK4
// 	// https://www.youtube.com/embed/oEDiwZ5_TK4

// 	const link1 = link.split("=");

// 	const link2 = textoYT + link1[1] + "#t=2m3s";

// 	socket.emit("videoYT", link2);

// 	// capaVideo.setAttribute("src", link2);

// })

socket.on("videoYT", data=>{
	capaVideo.setAttribute("src", data);
})

function cargar(ar){

	// console.log(ar);

	// socket.emit("enviarVideo", ar);





	 const reader = new FileReader();
	 reader.readAsArrayBuffer(ar);

	 reader.addEventListener("load", e=>{

	 	// console.log(e.currentTarget.result);

	 	//console.log(e.currentTarget.result);


	 	// const oman = e.currentTarget.result;

	 	// let tenten = JSON.parse(oman);


	 	// console.log(typeof tenten);
	 	// console.log(tenten);
	

	 	let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});
	 	let url = URL.createObjectURL(video);

	 	// console.log(url);

	 	socket.emit("urlBlob", url);

	 	// console.log(e.currentTarget.result);
	 	// console.log(typeof e.currentTarget.result); //Es un string

	 	

		// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", e.currentTarget.result);

		// let novedad = {"primero": e.currentTarget.result};

		// const enviar = JSON.stringify(e.currentTarget.result);

		// console.log(typeof enviar);
		// console.log(enviar);

		// const enviar2 = JSON.parse(enviar);

		// console.log(enviar2)

		// console.log(e.currentTarget.result);


		// socket.emit("changate", e.currentTarget.result);

		// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", e.currentTarget.result);
		//error polling-xhr.js:203


		// cargado = true;


		// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", e.currentTarget.result);


	 	



	 	// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", url);

	 })

}

socket.on("urlBlob", data=>{

	// const parte1 = data.split("//");
	// const linkVideo = parte1[1];
	// const linkVideo1 = linkVideo.split("/");
	// const linkVideo2 = linkVideo1[1];
	// const clienteURL = "blob:http://192.168.0.105:3000/" + linkVideo2;
	// console.log(clienteURL);

	// console.log(data);

	const cargarBlob = document.querySelector(".videoYT");
	cargarBlob.setAttribute("src", data);
})


archivo.addEventListener("change", e =>{
	

	let objetivo = e.target.files[0];

	// console.log(objetivo);

	// console.log(e.target.files[0])

	// socket.emit("changate", e.target.files[0]);

	// console.log(typeof e.target.files[0]);


	// socket.emit("changate", e.target.files[0]);

	// const webVideo = document.querySelector(".video");
	// webVideo.setAttribute("src", e.currentTarget.result);


	cargar(objetivo);

})

socket.on("changate", data =>{

	console.log("clienteRecibioMensaje")

	socket.emit("mensaje", "clienteRecibioMensaje");


	
	 // let file = new File([data], 'yt5s.com-Combat gods.mp4', { type: "video/mp4" })
	 // console.log(file);
	 

	 // const reader = new FileReader();
	 // reader.readAsDataURL(file);

	 // reader.addEventListener("load", e=>{

	

	 	// console.log("ere");

	 	// const webVideo = document.querySelector(".video");
		// webVideo.setAttribute("src", e.currentTarget.result);



	// });

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
 

	

	// const nuevo = url.split("/");

	// let navegando = nuevo[2];

	// const videoProcesado = nuevo[0] + "//" + navegando + "/" + nuevo[3];

	// console.log(data);

	// let file = new File([data], 'yt5s.com-Combat gods.mp4', { type: "video/mp4" })

	// console.log("fase1");

	 // const reader = new FileReader();
	 // reader.readAsArrayBuffer(file);

	 // reader.addEventListener("load", e=>{

	 	// let video = new Blob([new Uint8Array(e.currentTarget.result), {type: "video/mp4"}]);
		// let url = URL.createObjectURL(video);

	 	// console.log("fase2");

	 	const webVideo = document.querySelector(".video");
		webVideo.setAttribute("src", data);

		// console.log("fase3");

	 // });

	// if(!cargado){
		
	// }
		
})

let localV;

addEventListener("keydown", e=>{

	// console.log(e.keyCode);

	if(e.keyCode == 84){ //tecla "T"
		socket.emit("localVideo", "yt5s.com-Combat gods.mp3");
	}

	if(e.keyCode == 80){ //tecla "P"
		// localV = document.querySelector(".video");
		// localV.setAttribute("src", data);

		// capaVideo.setAttribute("src", "https://www.youtube.com/embed/3ZuY3aaG76Y?start=60")
		const aver1 = capaVideo.getAttribute("src");

		capaVideo.setAttribute("src", aver1 + "?t=60");
		// console.log(capaVideo.getAttribute("src"));

		// capaVideo.play();
		// console.log(capaVideo.__proto__);
		// console.log(capaVideo.loading);

		// console.log(capaVideo.align);
		// console.log(capaVideo.allow);
		// console.log(capaVideo.csp);
		// console.log(capaVideo.allowPaymentRequest);
		// console.log(capaVideo.frameBorder);
		// console.log(capaVideo.prototype);

		// console.log(capaVideo.sandbox);
		// console.log(capaVideo.srcdoc);
		// console.log(capaVideo.width);
		// console.log(capaVideo.featurePolicy);
		// console.log(capaVideo.contentDocument);
		// console.log(capaVideo.contentWindow);
		// console.log(capaVideo.longDesc);

	}
})

socket.on("localVideo", data=>{
	console.log("locandovideo");
	localV = document.querySelector(".video");
	localV.setAttribute("src", data);
})