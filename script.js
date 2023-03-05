let library=[];
let titleInput=document.getElementById("title");
let authorInput=document.getElementById("author");
let readInput=document.getElementById("read");
let pagesInput=document.getElementById("pages");
let readPagesInput=document.getElementById("readPages");

function Book(title,author,read,pages,readPages){
    this.title=title;
    this.author=author;
    if (read!==undefined){
        if (read=="on" || read){
            this.read=true;
        }
        else if (read=="off"||read==false){
            this.read=false;
        }
    }
    if (pages!==undefined){
        this.pages=pages;
    }
    if (read){
        this.readPages=pages;
    }
    else if (readPages!==undefined){
        this.readPages=readPages;
    }
}

function addBook(){
    library.push(new Book(titleInput.value,authorInput.value,readInput.value,pagesInput.value,readPagesInput.value));
    console.log(library[library.length-1]);
}

/*
to-do:
- implement HTML
    - addBook(); popup
    - showBooks();
- Book.removeBook();
- local storage
*/