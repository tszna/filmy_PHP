class FilmBox {
	constructor(element) {
		this.element = element;
	}

	render(films) {
		var filmEntries = [];
		
		for (var key in films) {
			var filmEntry = new FilmEntry(films[key]);
			//console.log(filmEntry);
			filmEntries.push(filmEntry);
			
		}

		$(this.element).html('');
		var box = this.element;

		filmEntries.forEach(function(film) {
			$(box).append(film.render());
			//console.log(film);
		});
	}
}
