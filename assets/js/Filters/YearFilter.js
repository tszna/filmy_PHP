class YearFilter extends InputFilter {
	constructor(params) {
		super(params);
	}

	render() {
		return '' +
			'<div class="filter__item">'+
				'<input type="'+this.type+'" name="'+this.name+'" id="'+this.name+'" class="form__input main__subchildren filter" placeholder="'+this.placeholder+'" />'+
			'</div>';
	}
}
