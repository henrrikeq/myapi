fetch('https://book-information-library.p.rapidapi.com/api/books/getall-books', {
    headers: {
        'x-rapidapi-key': 'a91feda1e3msh48b7cc709c40054p1abcadjsn2f18a7fc782e',
        // 'x-rapidapi-host': 'book-information-library.p.rapidapi.com'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.table(data.books);
        for (const book of data.books) {
            const bookDiv = document.createElement('div');

            const bookH2 = document.createElement('h2');
            bookH2.textContent = book.title;
            bookDiv.appendChild(bookH2);

            const bookP = document.createElement('p');
            bookP.textContent = book.summary;
            bookDiv.appendChild(bookP);

            const bookH3 = document.createElement('h3');
            bookH3.textContent = book.author; 
            bookDiv.appendChild(bookH3);

            const bookImg = document.createElement('img') 
    
             bookImg.setAttribute('src', book.img_url );
            console.log(bookImg)
            bookImg.setAttribute('alt', book.title);
            bookImg.classList.add('book-img');
            bookDiv.appendChild(bookImg);

            document.querySelector('#books').appendChild
            (bookDiv);
            
        }
            
    })