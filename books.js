function renderBooks () {
    const booksWrapper  = document.querySelector('.books');
    const books = getBooks();

    booksWrapper.innerHTML =
    `<div class="book">
        <figure class="book__img--wrapper">
            <img class="book__img" src=${books[0].url} alt="">
        </figure>
        <div class="book__title">
            Atomic Habits
        </div>
        <div class="book__ratings">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="book__price">
            <span class="book__price--normal">AED 37.50</span> AED 23.50
        </div>
    </div>`
}

setTimeout(() => {
    renderBooks();
});

function getBooks() {
    return [
        {
            id:1,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:2,
            title: "book-1",
            url:"photos/book-1.jpeg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:3,
            title: "book-2",
            url:"photos/book-2.jpeg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:4,
            title: "book-3",
            url:"photos/book-3.jpeg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:5,
            title: "book-4",
            url:"photos/book-4.jpeg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:6,
            title: "book-5.jpeg",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:7,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:8,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:9,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:10,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:11,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        },
        {
            id:12,
            title: "Atomic Habits",
            url:"photos/atomic habits.jpg",
            originalPrice: 49.95,
            salePrice: 14.95,
            rating: 4.5,
        }
    ]
}