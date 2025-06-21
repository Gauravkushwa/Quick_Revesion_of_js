const library = {
    books: [
      { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],
  
    addBook(book) {
      const { title, author, year } = book;
  
      if (typeof title !== 'string' || typeof author !== 'string' || typeof year !== 'number') {
        console.error("Book information is incomplete or incorrect.");
        return false;
      }
  
      if (this.findBookByTitle(title)) {
        console.warn(`A book with the title "${title}" already exists.`);
        return false;
      }
  
      this.books.push({ title, author, year });
      console.log(`Book "${title}" added successfully.`);
      return true;
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removed = this.books.splice(index, 1)[0];
        console.log(`Book "${removed.title}" removed successfully.`);
        return true;
      } else {
        console.error("Book not found.");
        return false;
      }
    }
  };
  
  library.addBook({ author: "George Orwell", year: 1949 });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
  console.log(`Total books in library: ${library.books.length}`);
  library.removeBook("1984");
  library.removeBook("1984");
  console.log("Final Library Collection:", library.books);
  