let library=[];
let titleInput=document.getElementById("title");
let authorInput=document.getElementById("author");
let readInput=document.getElementById("read");
let pagesInput=document.getElementById("pages");
let readPagesInput=document.getElementById("readPages");
let addBookPopup=document.getElementById("addBookPopup");

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
}

function showAddBookPopup(){
    addBookPopup.style.display="block";
    addBookPopup.style.width="40vw";
    addBookPopup.style.height="96vh";
}

/*
to-do:
- implement HTML
    - addBook(); popup
    - showBooks();
- Book.removeBook();
- local storage
*/