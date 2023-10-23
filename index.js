/*

Challenge: Create a Library System

You need to create a Library object that can hold multiple bookshelves.

Each bookshelf should have a name and contain books. 
The Library should have methods to add bookshelves, remove bookshelves,
add books to a specific bookshelf, remove books from a specific bookshelf, 
and display the list of bookshelves and books in each bookshelf.

Your task is to implement the Book, Bookshelf, and Library classes using Object-Oriented Programming principles. 
Here are the specifications for each class:

Book Class:
- Properties:
  - `title`: (string) The title of the book.
  - `author`: (string) The author of the book.
- Methods:
  - None. Just create a constructor to initialize the title and author properties.

Bookshelf Class:
- Properties:
  - `name`: (string) The name of the bookshelf.
  - `books`: (array) An array to store the Book objects.
- Methods:
  - `addBook(title, author)`: Accepts a title and an author as parameters, creates a new Book object, and adds it to the `books` array.
  - `removeBook(title)`: Accepts a title as a parameter, finds the book with the given title, and removes it from the `books` array.
  - `displayBooks()`: Displays the list of books in the `books` array.

Library Class:
- Properties:
  - `bookshelves`: (array) An array to store the Bookshelf objects.
- Methods:
  - `addBookshelf(name)`: Accepts a name as a parameter, creates a new Bookshelf object with the given name, and adds it to the `bookshelves` array.
  - `removeBookshelf(name)`: Accepts a name as a parameter, finds the bookshelf with the given name, and removes it from the `bookshelves` array.
  - `addBookToBookshelf(name, title, author)`: Accepts a name, title, and author as parameters, finds the bookshelf with the given name, and adds a new book with the given title and author to that bookshelf.
  - `removeBookFromBookshelf(name, title)`: Accepts a name and title as parameters, finds the bookshelf with the given name, and removes the book with the given title from that bookshelf.
  - `displayLibrary()`: Displays the list of bookshelves and books in each bookshelf.

*/

class Book{
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Bookshelf{
   constructor(name) {
    this.name = name;
    this.books = [];
   }
   addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
   }
   removeBook(title){
        this.books=this.books.filter(b => b.title !== title);
   }
   
   displayBooks(){
    console.log(`Displaying all books in ${this.name}: \n`);
    this.books.forEach(b => {
      console.log(`${b.title} by ${b.author}`);
    });
   }
}

class Library{
  constructor() {
    this.bookshelves = [];
  }
  addBookshelf(name){
    const bs = new Bookshelf(name);
    this.bookshelves.push(bs);
  }

  removeBookshelf(name){
    this.bookshelves = this.bookshelves.filter(bs => bs.name !== name);
  }

  addBookToBookshelf(name, title, author) {
    let bs = this.bookshelves.find(bookshelf => bookshelf.name === name);
    if (bs) {
      console.log(`Bookshelf '${name}' already exists.`);
    } else {
      bs = new Bookshelf(name);
      this.bookshelves.push(bs);
    }
    bs.addBook(title, author);
  }

  removeBookFromBookshelf(name, title){
    let bs = this.bookshelves.find(bookshelf => bookshelf.name === name);
    if(bs){
      console.log(`Bookshelf found. Checking if book is found.`);
      let b = bs.books.find(b => b.title === title);
      if(b){
        console.log(`Book found. Ready to remove`);
        bs.removeBook(title);
      }else{
        console.log("Book not found");
      }
    }
    else{
      console.log("Bookshelf does not exist");
    }
  }
  displayLibrary(){
    this.bookshelves.forEach(bs => {
      console.log(` Bookshelf name is: ${bs.name}`);
      bs.books.forEach(b => console.log(` movies inside ${bs.name}: ${b.title} by ${b.author}`));
    });
  }
}

///Testing


const library = new Library();
 library.addBookshelf("Horror");
 library.addBookshelf("Action");
 library.addBookshelf("Drama");
 library.displayLibrary();
// library.removeBookshelf("Action");
// console.log("After removing action");
// library.displayLibrary();

// library.addBookToBookshelf("Action","Fast 5","Thomas");
// library.addBookToBookshelf("Action","SpiderMan","Marvel");
// library.addBookToBookshelf("Magic","Harry Potter","JK Rowling");
// library.displayLibrary();
// library.removeBookFromBookshelf("Actlkjlkjlion","Spid");
// library.removeBookFromBookshelf("Action","Spid");
// library.removeBookFromBookshelf("Action","SpiderMan");
// library.displayLibrary();

//library.removeBookshelf("Action");
//library.displayLibrary();





// const psyBookShelf = new Bookshelf("Psychology");
// psyBookShelf.addBook("Motivation","Dr AA");
// psyBookShelf.addBook("Love","Dr BB");
// psyBookShelf.addBook("Brain","Dr CC");

// psyBookShelf.displayBooks();

// psyBookShelf.removeBook("Love");

// psyBookShelf.displayBooks();




