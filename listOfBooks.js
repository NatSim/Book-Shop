import { books } from "./bookshopindex.js";

export default function createBookList() {
  const bookListSection = document.querySelector("#list");

  const bookDiv     = document.createElement("div");
  for (let i = 0; i < books.length; i++) {
    const bookContent   = document.createElement("div");
    const image         = document.createElement("img");
    const title         = document.createElement("h2");
    const author        = document.createElement("p");
    const price         = document.createElement("p");
    const description   = document.createElement("summary");
    const cta           = document.createElement("button")   //call to action


    bookDiv.className = "book"; 

    image.src         = books[i].image; //i=index[0,1,2,3]
    image.alt         = books[i].name;  //attributes
    title.textContent = books[i].name; // added to h2 tag
    // Author, price, desc, button?
    author.appendChild(
      document.createTextNode(books[i].author) //?!? why done this way
    );
    price.appendChild(
      document.createTextNode(books[i].price)
    );
    description.className = ("description");
    description.textContent = books[i].description; 
    cta.className = "addbtn";      //Note to Carlos missed className?!?
    cta.textContent = "Add +";


    bookContent.appendChild(image);
    bookContent.appendChild(title);
    bookContent.appendChild(author);
    bookContent.appendChild(price);
    bookContent.appendChild(description);
    bookContent.appendChild(cta);

    bookListSection.appendChild(
      bookDiv.appendChild(bookContent)
    );
  }

  return bookListSection;
}
