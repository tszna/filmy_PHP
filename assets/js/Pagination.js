class Pagination {

	constructor(params) {
		this.prevLimit = params.prevLimit;
		this.nextLimit = params.nextLimit;
		this.container = params.container;
		this.mid;
		this.prevButton;
		this.nextButton;
		this.firstButton;
		this.lastButton;
	}

	render() {
		$(this.container).append(''
			+ '<div class="pagination__container" id="pagination-wrapper">'
				+ '<div id="first"></div>'
				+ '<div id="prev"></div>'

				+ '<div id="mid"></div>'

				+ '<div id="next"></div>'
				+ '<div id="last"></div>'
			+ '</div>'

			+ '<h5 class="strona">Strona <i></i> z <i></i></h5>'
		);

		this.mid = $(this.container).find('#mid');

		this.prevButton = new PaginateButton({
			active: false,
			text: '<',
			container: $(this.container).find('#prev'),
			onclick: function() {
				if (page === 0) {
					return;
				}
				changePage(page - 1);
			}
		});

		this.nextButton = new PaginateButton({
			active: false,
			text: '>',
			container: $(this.container).find('#next'),
			onclick: function() {
				if (page < (numberOfPages - 1)) {
					changePage(page + 1);
				}
			}
		});

		this.firstButton = new PaginateButton({
			active: false,
			text: '<<',
			container: $(this.container).find('#first'),
			onclick: function() {
				if (page === 0) {
					return;
				}
				changePage(0);
			}
		});

		this.lastButton = new PaginateButton({
			active: false,
			text: '>>',
			container: $(this.container).find('#last'),
			onclick: function() {
				if (page < (numberOfPages - 1)) {
					changePage(numberOfPages - 1);
				}
			}
		});

		this.prevButton.render();
		this.nextButton.render();

		this.firstButton.render();
		this.lastButton.render();
	}

	refresh(page, numberOfPages) {
		$(this.container).find('h5 i:last-of-type').text(numberOfPages);
		$(this.container).find('h5 i:first-of-type').text(page + 1);
		var hasPreviousPage = page > 0; // Czy mamy poprzednią stronę
		var hasNextPage = page < (numberOfPages - 1); // Czy mamy stronę następną
		var firstButtonNumber = page - this.prevLimit; // Pierwszy numer strony umieszczony na przycisku
		var pagesNumbersToShow = []; // Tablica stron które pokażemy
		// Generowanie listy przycisków z numerami stron
		// Zaczynamy od strony najmniejszej którą chcemy wyświetlić;
		// Robimy to tak długo, aż numer strony którą będziemy chcieli wyświetlać nie okaże się "nie mniejszy" niż
		// numer od którego zaczynaliśmy (firstButtonNumber) + liczba stron które wyświetlamy w przód (this.nextLimit) + liczba stron które wyświetlamy wstecz (this.prevLimit) plus jeden (czyli numer strony na któej obecnie jesteśmy)
		// i numer strony jest mniejszy niż liczba stron
		for (var i = firstButtonNumber; i < firstButtonNumber + (this.nextLimit + this.prevLimit + 1) && i < numberOfPages; i++) {
			//  Jeśli numer strony jest mniejszy od 0 -> nie ma takiej strony i pomijamy
			if (i < 0) {
				i = -1;
				continue;
			}
			// DOdajemy numer strony do listy
			pagesNumbersToShow.push(i);
		}
		// Usunięcie poprzednich przycisków (jeśli były)
		this.mid.html('');
		// Jeśli nie jesteśmy na pierwszej stronie -> przed listą przycisków z numerami stron robimy przyscisk z trzema kropkami
		if (page != 0) {
			var dotsBefore = new PaginateButton({
				active: false,
				text: '..',
				container: this.mid
			});

			dotsBefore.render();
		}
		// Wstawienie przycisków z numerami stron do paginatora
		for (var i = 0; i < pagesNumbersToShow.length; i++) {
			// Numer strony przycisku
			let pageNo = pagesNumbersToShow[i];
			let middlePage = page === pageNo;

			var button = new PaginateButton({
				active: !middlePage,
				color: middlePage ? 'dark' : 'primary',
				text: pageNo + 1,
				page: pageNo,
				onclick: function() {
					if (!middlePage) {
						changePage(parseInt(this.dataset.page));

					}
				},
				container: this.mid
			});
			
			button.render();
		}
		// 3 kropki pokazują się gdy jest następna strona
		if ((page + 1) < numberOfPages) {
			var dotsAfter = new PaginateButton({
				active: false,
				text: '..',
				container: this.mid
			});

			dotsAfter.render();
		}
		// Przycisk następnej strony nie jest wyłączony gdy jest następna strona
		this.nextButton.setActive = hasNextPage;
		// Przycisk poprzedniej strony nie jest wyłączony gdy jest poprzednia strona
		this.prevButton.setActive = hasPreviousPage;
		// Przycisk pierwszej strony nie jest wyłączony gdy numer strony jest różny od 0
		this.firstButton.setActive = page != 0;
		// Przycisk ostatniej strony nie jest wyłączony gdy numer strony jest różny od ostatniej strony
		this.lastButton.setActive = page != (numberOfPages - 1);
	}
}
