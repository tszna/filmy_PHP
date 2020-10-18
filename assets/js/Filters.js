class Filters {
	constructor(params) {
		this.filters = params.filters;
		this.url = params.url;
		this.filtersElement = params.filtersElement;
	}

	filter(fromPageChange) {
		// Jeśli filtrowanie nie zostało wywołane na skutek zmiany strony, to należy wrócić na stronę pierwszą
		if (false == fromPageChange) {
			changePage(0);
			return;
		}

		var filters = {};

		for (var i = 0; i < this.filters.length; i++) {
			filters[this.filters[i].name] = this.filters[i].value;
		}

		var formData = new FormData();
		formData.append('offset', offset);
		formData.append('limit', limit);

		for (const key in filters) {
			const value = filters[key];

			if (Array.isArray(value)) {
				for (const kk in value) {
					formData.append('filtry['+key+'][]', value[kk]);
				}
			} else {
				formData.append('filtry['+key+']', value);
			}
		}

		const fetchConfig = {
			method: 'POST',
			body: formData
		};

		fetch(this.url, fetchConfig)
			.then(response => response.json())
			.then((data) => {
				filmBox.render(data.films);

				numberOfPages = data.numberOfPages;
				pagination.refresh(page, data.numberOfPages);
			})
			.catch((error) => {
				console.error('Ajax films error', error);
				$('#results').html('<h3><strong>Nie udało się pobrać listy filmów</strong></h3>');
			});

		// var xml = new XMLHttpRequest();
		// xml.onreadystatechange = function () {
		// 	if (this.readyState == 4) {
		// 		if (this.status == 200 && this.response !== undefined) {
		// 			var data = JSON.parse(this.response);
		//
		// 			filmBox.render(data.films);
		//
		// 			numberOfPages = data.numberOfPages;
		// 			pagination.refresh(page, data.numberOfPages);
		// 		} else {
		// 			console.error('Ajax films error', this);
		// 			$('#results').html('<h3><strong>Nie udało się pobrać listy filmów</strong></h3>');
		// 		}
		// 	}
		// };
		// xml.open('POST', this.url, true);
		// xml.send(formData);
		// // xml.send("{\"test\":\"12\"}");

		// $.ajax(
		// 	this.url,
		// 	{
		// 		type: 'POST',
		// 		async: true,
		// 		data: {
		// 			"flitry": filters,
		// 			"offset": offset,
		// 			"limit": limit
		// 		}
		// 	}
		// )
		// 	.done(function (data) {
		// 		filmBox.render(data.films);
		//
		// 		numberOfPages = data.numberOfPages;
		// 		pagination.refresh(page, data.numberOfPages);
		// 	})
		// 	.fail(function (error) {
		// 		console.log(error);
		// 		$('#results').html('<h3><strong>' + error.responseJSON.error + '</strong></h3>');
		// 	});
	}

	init() {
		for (var i = 0; i < this.filters.length; i++) {
			$(this.filtersElement).append(this.filters[i].render());
		}
	}
}
