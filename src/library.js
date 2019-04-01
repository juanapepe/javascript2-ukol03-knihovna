/*
  Třída pro knihovnu.

  Vlastnosti:
  - booklist: pole knih (objektů třídy Book)
  - lastBook: poslední přečtená kniha (objekt třídy Book)
  - currentBook: aktuálně čtená kniha (objekt třídy Book)
  - nextBook: příští kniha k přečtení (objekt třídy Book)
  - unreadBooks: počet nepřečtených knih

  Metody:
  - addBook(book): přidá knihu do knihovny
  - listAllBooks(): výpis všech knih v knihovně
  - startReadingNextBook(): začne čtení další knihy (tj. příští knihu přesune do aktuálně čtené knihy a do příští knihy vloží první nepřečtenou knihu v seznamu)
*/
export default class Library {

  constructor() {
    this.bookList = [];
    this.lastBook = null;
    this.currentBook = null;
    this.nextBook = null;
    this.unreadBooks = 0;
  }

  /* přidat knihu do knihovny */
  addBook(book) {
    this.bookList.push(book);

    if (!book.isRead) {
      this.unreadBooks++;

      if (this.nextBook === null) {
        this.nextBook = book;
      }
    }
  }

  /* výpis všech knih v knihovně */
  listAllBooks() {
    console.table(this.bookList);
    console.log(this.currentBook);
    console.log(this.nextBook);

    // current book in HTML
    this.currentBook.renderHTML();
  }

  /* začít číst další knihu */
  startReadingNextBook() {
    if (this.nextBook !== null) {
      // příští knihu ke čtení dáme do aktuálně čtené knihy
      this.currentBook = this.nextBook;
      this.nextBook = null;

      // do příští knihy ke čtení dáme první nepřečtenou knihu v seznamu
      for (let book of this.bookList) {
        if (!book.isRead && book !== this.currentBook) {
          this.nextBook = book;
          break;
        }
      }
    }
  }

  // dočtení aktuálně čtené knihy
  finishCurrentBook() {

    if (this.currentBook !== null) {
      
      // u aktuálně čtené knihy zavolá metodu read()
      this.currentBook.read();
      // let kniha = new Book('Wilbur Smith', 'Řeka bohů', 1980);
      // let kniha = this.currentBook;
      // kniha.read(); 

      // přesune aktuální knihu z vlastnosti currentBook do vlastnosti lastBook
      this.lastBook = this.currentBook;

      // do currentBook dáme hodnotu null - dočetli jsme, takže teď nic nečteme
      this.currentBook = null;

      // aktualizuje počet nepřečtených knih, aby odpovídal aktuálnímu stavu
      // console.log(`Počet nepřečtených knih před odečtením unreadBooks je: ${this.unreadBooks}`);
      this.unreadBooks--;
      console.log(`Počet nepřečtených knih po odečtení unreadBooks je: ${this.unreadBooks}`);
    }
  }

  // výpis všech nepřečtených knih
  listUnreadBooks() {

    // vyfiltruje ze seznamu všech knih (vlastnost booklist) jenom ty knihy, které jsou nepřečtené
    // výsledek se uloží do lokální proměnné jako nové pole
    
    // console.log(`Původní seznam všech knih:`);
    // console.table (this.bookList);

    let unreadList = this.bookList.filter(item => item.isRead === false);

    // toto nové pole (seznam nepřečtených knih) vypíše do konzole (nebo do HTML, viz. bonus)
    console.log(`Vyfiltrovaný seznam s pouze nepřečtenými knihami:`);
    console.table(unreadList);    
  }

}