class Filter {
	constructor(params) {
		this.name = params.name;
		//console.log(this.name);
	}

	render() {}

	get name() {
		//console.log(this._name);
		return this._name;
	}

	set name(newValue) {
		
		this._name = newValue;
	}

	get value() {
		//console.log($('#'+this.name).val());
		return $('#'+this.name).val();
	}
}
