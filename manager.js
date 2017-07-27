window.onload = function(){
	if (window["Worker"]){
	var worker = new Worker("worker.js");
	worker.postMessage("ping");
	worker.onmessage = function(event){
		var message = "\"Worker\"\n\v\t says " + event.data;
		document.getElementById("output").innerHTML = message;
	}
} else {
	document.getElementById("output").innerHTML = "No Web Worker";
}
}