const handlers = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handlers.addBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: handlers.getAllBooks
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handlers.getBookById
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handlers.updateBook
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handlers.deleteBook
  }
];

module.exports = routes;
