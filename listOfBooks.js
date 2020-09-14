import { books } from "/bookshopindex.js";

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
    // const cta           = document.createTextNode("Suggested Reading"); // CTA stands for `Call To Action`.
    const cta           = document.createElement("button")


    bookDiv.className = "book";

    image.src         = books[i].image;
    image.alt         = books[i].name;
    title.textContent = books[i].name;
    // Author, price, desc, button?
    author.appendChild(
      document.createTextNode(books[i].author)
    );
    price.appendChild(
      document.createTextNode(books[i].price)
    );
    description.className = ("description");
    description.textContent = books[i].description;
    cta.class = "addbtn";
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
