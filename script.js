let library=[];
let titleInput=document.getElementById("title");
let authorInput=document.getElementById("author");
let readInput=document.getElementById("read");
let pagesInput=document.getElementById("pages");
let readPagesInput=document.getElementById("readPages");

let addBookPopup=document.getElementById("addBookPopup");
let books=document.getElementById("books");
let firColumn=document.getElementById("firColumn");
let secColumn=document.getElementById("secColumn");

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
    addBookPopup.style.height="500px";
}

function showBooks(){
    for (let i=0;i<firColumn.children.length;i++){
        firColumn.children[i].remove();
    }
    for (let i=0;i<secColumn.children.length;i++){
        secColumn.children[i].remove();
    }
    for (let i=0;i<library.length;i++){
        let newDiv=document.createElement("div");
        if (i%2==0){
            firColumn.appendChild(newDiv);
            firColumn.appendChild(document.createElement("br"));
        }
        else{
            secColumn.appendChild(newDiv);
            secColumn.appendChild(document.createElement("br"));
        }
        newDiv.className="book center";
        newDiv.innerHTML=`<strong>${library[i].title}</strong><br>${library[i].author}<br>Pages: ${library[i].pages}<br>Pages read: ${library[i].readPages}`;
    }
    console.log(books);
}
showBooks();

/*
to-do:
- 2 columns
- Book.removeBook();
- local storage
*/