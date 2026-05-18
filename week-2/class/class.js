/*Assignment 1: Library Book Management System */
//Data
class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isAvailable = true
    }
    borrow() {
        this.isAvailable = false
        return this.isAvailable
    }
    returnBook() {
        this.isAvailable = true
        return this.isAvailable
    }
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`
    }
    isLongBook() {
        return this.pages > 300
    }
}

// Create 5 book objects
let book1 = new Book('Harry Potter','JK Rowling',589)
let book2 = new Book('1984','George Orwell',257)
let book3 = new Book('The Hobbit','J.R.R. Tolkien',310)
let book4 = new Book('Oppenheimer','Christopher Nolan',626)
let book5 = new Book('The Great War','Mikhail Tukachevsky',600)
// Store all books in an array
let library = [book1, book2, book3, book4, book5];
// i. Display info of all books
console.log("Information of all books: ")
library.forEach(book => {
    console.log(book.getInfo())
})
// ii. Borrow 2 books and show their availability status
console.log("Availability Status: ")
let borrowedBook1 = book1.borrow()
let borrowedBook2 = book2.borrow()
console.log(`${book1.title} available: ${book1.isAvailable}`)
console.log(`${book2.title} available: ${book2.isAvailable}`)
// iii. Return 1 book and show updated status
console.log("Updated status of Book returned: ")
let returnedBook = book1.returnBook()
console.log(`${book1.title} available after return: ${book1.isAvailable}`)
// iv. Count how many books are "long books" (more than 300 pages)
console.log("Long books: ")
let longBooksCount = library.filter(book => book.isLongBook()).length
console.log(`Number of long books: ${longBooksCount}`)
// v. List all available books
console.log("All available books: ")
let availableBooks = library.filter(book => book.isAvailable)
availableBooks.forEach(book => {
    console.log(book.getInfo())
})