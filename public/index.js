const socket = io();

let reproducir;

const archivo = document.querySelector(".archivo");

function cargar(ar){

	// console.log(ar);

	 const reader = new FileReader();
	 reader.readAsArrayBuffer(ar);
	 reader.addEventListener("load", e=>{
	 	// console.log(e);
	 	// console.log(e.currentTarget.result);

	 	let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"});
	 	let url = URL.createObjectURL(video);



	 	socket.emit("enviarVideo", url);

	 	// console.log(typeof url);


	 	// const create = document.createElement("VIDEO");
	 	// create.setAttribute("controls", "");
	 	// create.setAttribute("src", url);
	 	// document.body.appendChild(create);

	 	// const webVideo = document.querySelector(".video");

	 	// console.log(video);

	 	// webVideo.setAttribute("src", url);
	 	

	 })

}

archivo.addEventListener("change", e =>{
	cargar(e.target.files[0]);
})

socket.on("enviarVideo", data=>{
	const webVideo = document.querySelector(".video");
	webVideo.setAttribute("src", data);
})