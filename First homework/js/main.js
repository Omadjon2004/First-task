const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
];
console.log(books);
const sortByYears= books.sort(function(a, b){return a.year - b.year});

const authors =sortByYears.map((element)=>{
    return ` <div class="col-lg-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1 class="card-title">${element.year}</h1>
          <h3>${element.author}</h3>
                    <a href="" class="btn btn-primary">${element.genre}</a>
        </div>
      </div>
</div>
` })
const row =document.querySelector('.row')
row.innerHTML=authors.join('');