/*
  Třída pro jednu knihu v knihovně.

  Vlastnosti:
  - author: autor knihy
  - title: název khiny
  - year: rok vydání
  - image: obrázek knihy
  - isRead: boolean (true/false) zda máme knihu přečtenou

  Metody:
  - read(): označí knihu jako přečtenou
*/
export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

  // Ke knize do třídy Book dopiš metodu, která bude vracet HTML kód pro zobrazení knihy
  renderHTML() {
    let bookInHTML = `<div class="book">
                      <div class="book__image">
                      <img src="images/${this.image}" alt="Obálka Název knihy">
                      </div>
                      <div class="book__info">
                      <h3 class="book__title">${this.title}</h3>
                      <p class="book__meta">${this.author}, ${this.year}</p>
                      </div>
                      </div>
                      `;

    if (this.isRead)
    {
      bookInHTML = bookInHTML + `<!-- je-li kniha přečtená, vygeneruj sem i toto: -->
                   <div class="book__badge book__badge--read">Přečteno</div>

      <!-- jedná-li se o aktuálně čtenou knihu, vygeneruj sem toto: -->
      <!--<div class="book__badge book__badge--current">Právě čtu</div>-->`      
    }

    document.querySelector('#booklist').innerHTML = bookInHTML;
  }
}