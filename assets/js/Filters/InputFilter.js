class InputFilter extends Filter {
	constructor(params) {
		super(params);
		this.placeholder = params.placeholder;
		this.type = params.type;
	}

	static init() {
		$('input.filter').keyup(function () {
			filters.filter(false);
		});
	}
}
