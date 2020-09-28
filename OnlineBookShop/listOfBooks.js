import { books } from "./bookshopindex.js";

export default function createBookList() {
  const bookListSection = document.querySelector("#list");

  const bookDiv     = document.createElement("div");
  for (let i = 0; i < books.length; i++) {
    const bookContent   = document.createElement("div");
    const image         = document.createElement("img");  //246 x 400 image size
    const title         = document.createElement("h2");
    const author        = document.createElement("p");
    const price         = document.createElement("p");
    const description   = document.createElement("summary");
    const cta           = document.createElement("button")   //call to action
    const cta2          = document.createElement("button")

    bookDiv.className = "book"; 

    image.src         = books[i].image; //i=index[0,1,2,3]
    image.alt         = books[i].name;  //image attributes
    image.height      = 400;
    image.width       = 246;
    title.textContent = books[i].name; // added to h2 tag
    // Author, price, desc, button?
    author.appendChild(
      document.createTextNode(books[i].author) //?!? 
    );
    price.appendChild(
      document.createTextNode(books[i].price)
    );
    description.className = ("description");           //className for CSS
    description.textContent = books[i].description; 
    cta.className     = "addbtn";      //
    cta.textContent   = "Add +";
    cta2.className    = "rmvbtn";
    cta2.textContent  = "Remove -";
    price.className   =("price");
    price.textContent = books[i].price;
    author.className  = ("author");       
    author.textContent=books[i].author;


    bookContent.appendChild(image);
    bookContent.appendChild(title);
    bookContent.appendChild(author);
    bookContent.appendChild(price);
    bookContent.appendChild(description);
    bookContent.appendChild(cta);          //Need to append butttons to div above/currently in wrong div
    bookContent.appendChild(cta2);

    bookListSection.appendChild(
      bookDiv.appendChild(bookContent)
    );
  }

  return bookListSection;
}
