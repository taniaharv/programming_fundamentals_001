function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, secondName) {
    return firstName + ' ' + secondName;
}

function makeHalfPrice(price) {
    return  (0.5 * price);
}

function countBooks(books) {
    return  books.length;
}

function isInStock(bookDetails) {
 if (bookDetails.quantity > 0) {
     return true;
    }
     else {
       return false;
     }
}


function getTotalOrderPrice(price,qty) {
    const  totalPrice = price * qty;

    return addVAT(totalPrice);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};