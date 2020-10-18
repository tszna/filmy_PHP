class DirectorFilter extends SelectFilter {
	constructor(params) {
		super(params);
	}

	render() {
		return '' +
		'<div class="filter__item">' +
			'<select class="form__input main__subchildren filter" id="'+this.name+'" data-placeholder="Reżyser" name="'+this.name+'" '+this.multiple+'>' +
				this.getData() +
			'</select>' +
		'</div>';
	}

	getData() {
		return '' +
		    '<option value></option>' +
			'<option value="0">Brak</option>' +
			'<option value="1">Author One</option>' +
			'<option value="2">Director One</option>' +
			'<option value="3">Author Two</option>' +
			'<option value="4">Steven Spielberg</option>' +
			'<option value="5">M. Night Shyamalan</option>' +
			'<option value="6">Olivier Nakache</option>' +
			'<option value="7">Todd Phillips</option>' +
			'<option value="8">Gabriele Muccino</option>' +
			'<option value="9">J. Mackye Gruber</option>' +
			'<option value="10">Clint Eastwood</option>' +
			'<option value="11">Christopher Nolan</option>' +
			'<option value="12">Mark Herman</option>';
	}

	get name() {
		return this._name;
	}
	set name(newValue) {
		this._name = newValue;
	}
	
}
