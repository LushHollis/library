let library=[];
let titleInput=document.getElementById("title");
let authorInput=document.getElementById("author");
let readInput=document.getElementById("read");
let pagesInput=document.getElementById("pages");
let readPagesInput=document.getElementById("readPages");
let addBookPopup=document.getElementById("addBookPopup");
let books=document.getElementById("books");

function Book(title,author,read,pages,readPages){
    this.title=title;
    this.author=author;
    if (read!==undefined){
        if (read=="on" || read){
            this.read=true;
            this.readPages=pages;
        }
        else if (read=="off"||read==false){
            this.read=false;
            if (readPages!==undefined){
                this.readPages=readPages;
            }
        }
    }
    if (pages!==undefined){
        this.pages=pages;
    }
}

function addBook(){
    library.push(new Book(titleInput.value,authorInput.value,readInput.value,pagesInput.value,readPagesInput.value));
    console.log(library[library.length-1]);
    addBookPopup.style.display="none";
    addBookPopup.style.width="1";
    addBookPopup.style.height="1";
    showBooks();
}

function showAddBookPopup(){
    addBookPopup.style.display="block";
    addBookPopup.style.width="40vw";
    addBookPopup.style.height="96vh";
}

function showBooks(){
    for (let i=0;i<books.children.length;i++){
        books.children[i].remove();
    }
    for (let i=0;i<library.length;i++){
        books.appendChild(document.createElement("div"));
        books.children[i].innerHTML=`<strong>${library[i].title}</strong></br>${library[i].author}</br>${library[i].pages}</br>${library[i].readPages}`;
    }
}
showBooks();

/*
to-do:
- spacing between book divs
- book div width (20?)
- Book.removeBook();
- local storage
*/