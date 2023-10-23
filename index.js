const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"



//Sort books from oldest to most recent
var dates = []
books.forEach(info => {
  dates.push(info["publishDate"])
});

dates.sort()
dates.forEach(element => {
  console.log(element)
});

//sort books alphabetically

titles.sort()
console.log(titles)


//Find who wrote War and Peace
books.forEach(author)
function author (info) {
  if (info["name"] == "War and Peace") {
    console.log(info["authorFirst"], info["authorLast"]);
  }
}


//how many books were written before 1900?
var dates = []
books.forEach(addDates)
function addDates(info) {
 dates.push(info["publishDate"])
}
var numofbooks = 0
dates.forEach(beforeDate)
function beforeDate (amount) {
  if (amount < 1900) {
    numofbooks += 1
  }
}
console.log(numofbooks)



//was there at least one book published within the last 100 years?
var wasit = false
dates.forEach(dateSorter)
function dateSorter(date) {
  if (2023 - date <= 100) {
    wasit = true
  }
}

if (wasit == true) {
  console.log("there was a book written in the last 100 years")
} else {
  console.log("there is not a book written in the last 100 years")
}

//was every book published within the last 100 years?
var old = true
dates.forEach(filterDate)
function filterDate(date) {
  if (2023 - date >= 100) {
    old = false
  }
}
console.log(old)

//print a list of books that "includes" the genre historical
var histgenres = []
books.forEach (subject)
function subject(info) {
  if (info["genre"].includes("historical")) {
    histgenres.push(info["name"])
  }
}
console.log(histgenres)
