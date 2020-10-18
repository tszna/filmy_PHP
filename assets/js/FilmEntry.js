class FilmEntry {
	constructor(params) {
		this.img = params.img;
		this.title = params.title;
		this.originalTitle = params.original_title;
		this.year = params.year;
		this.directors = params.director;
		this.categories = params.category;
	}

	render() {
		return '' +
			'<div class="films">' +
				'<div class="film">' +
					this.renderImage() +
					this.renderFirstColumn() +
					this.renderSecondColumn() +
				'</div>' +
			'</div>';
	}

	renderImage() {
		return '' +
			'<div class="film__image">' +
				'<img src="' + this.img + '" class="film__img" alt="...">' +
			'</div>';
	}

	renderFirstColumn() {
		return '' +
			'<div class="film__firstcolumn">' +
			    '<p>Tytuł PL: ' + '<span style="color:blue">' + this.title + '</span>' + '</p>' +
				'<p>Tytuł ORG: ' + '<span style="color:blue">' + this.originalTitle + '</span>' + '</p>' +
				'<p>Kategoria: ' + '<span style="color:blue">' + array_values(this.categories).join(', ') + '</span>' + '</p>' +
			'</div>';
	}

	renderSecondColumn() {
		return '' +
			'<div class="film__secondcolumn">' +
				'<p>Rok wydania: ' + '<span style="color:blue">' + this.year + '</span>' + '</p>' +
				'<p>Reżyser: ' + '<span style="color:blue">' + array_values(this.directors).join(', ') + '</span>' + '</p>' +
			'</div>';
	}
}
