
function pianoView(options) {

	let pianoViews = document.querySelectorAll('.pianoView')

	if (options.range === 'undefined'){

	}

	pianoViews.forEach( pianoView => {
		pianoView.style.backgroundColor = "red";
	}) 
}
module.exports.pianoView = pianoView;
