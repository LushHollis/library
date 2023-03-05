let library=[];

function Book(title,author,read=false,pages=100,readPages=100){
    this.title=title;
    this.author=author;
    this.read=read;
    this.pages=pages;
    if (read){
        this.readPages=pages;
    }
    else{
        this.readPages=readPages;
    }
}

library[0]=new Book("Children of Blood and Bone","Tomi Adeyemi",true);

/*
to-do:
- addBook();
- implement HTML
- Book.removeBook();
- change default page number to "undefined"
- local storage
*/