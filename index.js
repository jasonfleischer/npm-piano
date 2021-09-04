
function simplePiano(options) {

	let pianoViews = document.querySelectorAll('.simple-piano')

	if (options.range === 'undefined'){

	}

	pianoViews.forEach( pianoView => {
		pianoView.style.backgroundColor = "red";
	}) 
}
module.exports.simplePiano = simplePiano;
