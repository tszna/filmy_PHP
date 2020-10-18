class SelectFilter extends Filter {
	constructor(params) {
		super(params);
		this.multiple = params.multiple;
	}

	getData() {
		return '';
	}

	get multiple() {
		return this._multiple === true
			? 'multiple'
			: '';
	}

	set multiple(newValue) {
		this._multiple = newValue;
	}

	get value() {
		const isMultipleAndEmpty = this.multiple && $('#'+this.name).val().length === 0;
		const isNotMultipleAndValueEqualsZero = !this.multiple && $('#'+this.name).val() == '0';

		if (isMultipleAndEmpty || isNotMultipleAndValueEqualsZero) {
			return '';
		}

		return $('#'+this.name).val();
	}

	static init() {
		$('select.filter').change(function () {
			filters.filter(false);
		});
	}
}
