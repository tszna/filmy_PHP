class CategoryFilter extends SelectFilter {
	constructor(params) {
		super(params);
	}

	render() {
		return '' +
			'<div class="filter__item">' +
				'<select class="form__input main__subchildren filter" id="'+this.name+'" name="'+this.name+'" data-placeholder="Kategoria" '+this.multiple+'>' +
					this.getData() +
				'</select>' +
			'</div>';
	}

	getData() {
		return '' +
		    '<option value></option>' +
			'<option value="1">Akcja</option>' +
			'<option value="2">Horror</option>' +
			'<option value="3">Fantasy</option>' +
			'<option value="4">Komedia</option>' +
			'<option value="5">Dramat</option>' +
			'<option value="6">Animacja</option>' +
			'<option value="7">Romans</option>' +
			'<option value="8">Wojenny</option>' +
			'<option value="9">Sci-Fi</option>' +
			'<option value="10">Thriller</option>';
	}
}
