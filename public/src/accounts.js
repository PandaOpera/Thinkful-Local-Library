function findAccountById(accounts, id) {
  const found = accounts.find(account => account.id == id )
  return found;
 }
 
 
 function sortAccountsByLastName(accounts) {
   const sorted = accounts.sort((accountA, accountB) => 
     accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
   return sorted;
 }
 
 function getTotalNumberOfBorrows(account, books) {
   const accountId = account.id;
   return books.reduce((totalBorrowed, { borrows }) => {
     if (borrows.some((record) => record.id === accountId)) totalBorrowed++;
     return totalBorrowed;
   }, 0);
 }
 
 
 function getBooksPossessedByAccount(account, books, authors) {
   const inPossesion = [];
   books.map((book) => {
     book.borrows.map((borrow) => {
       authors.map((author) => {
         if (author.id === book.authorId) book["author"] = author;
       });
       if (borrow.returned === false && borrow.id === account.id) {
         inPossesion.push(book);
       }
     });
   });
   return inPossesion;
 }
 
 module.exports = {
   findAccountById,
   sortAccountsByLastName,
   getTotalNumberOfBorrows,
   getBooksPossessedByAccount,
 };