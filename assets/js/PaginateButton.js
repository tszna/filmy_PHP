var paginateButtonUniqueId = 1;

class PaginateButton {

	constructor(params) {
		this.color = params.color || 'primary';
		this.active = params.active === undefined ? true : params.active;
		this.onclick = params.onclick || null;
		this.text = params.text;
		this.page = params.page;
		this.id = paginateButtonUniqueId++;
		this.container = params.container;
		this.element = document.createElement('button'); // "<button></button>"
	}

	render() {
		this.element.type = 'button';
		this.element.id = 'paginate-button-' + this.id;
		this.element.classList.add('btn');
		this.element.classList.add('btn-' + this.color);
		this.refreshActivity();
		this.element.innerHTML = this.text;
		this.element.onclick = this.onclick;
		this.element.dataset['page'] = this.page;

		this.container.append(this.element);
		// this.container.append('<button type="button" id="paginate-button-1" class="btn btn-primary" onclick="'+this.onclick+'" data-page="'+this.page+'">'+this.text+'</button>');
	}

	set setActive(newValue) {
		this.active = newValue;
		this.refreshActivity();
	}

	refreshActivity() {
		if (this.active) {
			this.element.removeAttribute('disabled');
		} else {
			this.element.setAttribute('disabled', '');
		}
	}
}
