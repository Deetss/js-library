var myLibrary = [];
var queryDict = {};

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  
  if (this.read) {
    this.readMsg = 'has been read';
  } else {
    this.readMsg = 'has not been read';
  }
}

var book1 = new Book('Some title', 'Some Author', 255, false);
var book2 = new Book('some other title', 'Some Other Author', 522, true);

myLibrary.push(book1);
myLibrary.push(book2);

function addBookToLibrary(e) {
  e.preventDefault();
  getQueryValues();
  
  var newBook = new Book(queryDict[0], queryDict[1], queryDict[2], queryDict[3]);
  
  myLibrary.push(newBook);
  loadTable();
  clearForm();
}

function buildForm() {
  var f = document.createElement("form");
  document.body.appendChild(f);
  f.setAttribute('id', 'book-form');
  f.addEventListener("submit", addBookToLibrary);
  
  var t = document.createElement("input"); //input element, text
  t.setAttribute('type',"text");
  t.setAttribute('name',"title");
  t.setAttribute('placeholder',"Title");
  t.setAttribute('id', 'title');
  
  
  var a = document.createElement("input"); //input element, text
  a.setAttribute('type',"text");
  a.setAttribute('name',"author");
  a.setAttribute('placeholder',"Author");
  a.setAttribute('id', 'author');
  
  var p = document.createElement("input"); //input element, text
  p.setAttribute('type',"text");
  p.setAttribute('name',"numPages");
  p.setAttribute('placeholder',"Number of Pages");
  p.setAttribute('id', 'num-pages');
  
  
  var r = document.createElement("select");
  r.setAttribute('type', 'select');
  r.setAttribute('name', 'read');
  r.setAttribute('id', 'read');
  
  var s = document.createElement("button"); //input element, Submit button
  s.setAttribute('value',"Add Book");
  s.innerHTML = 'Add Book';
  
  f.appendChild(t);
  f.appendChild(a);
  f.appendChild(p);
  f.appendChild(r);
  f.appendChild(s);
  
  var option = document.createElement("option");
  var option2 = document.createElement("option");
  r.appendChild(option);
  r.appendChild(option2);
  var opt1 = r.firstChild;
  var opt2 = opt1.nextSibling;
  opt1.value = "true";
  opt1.innerHTML = "Has been read";
  opt2.value = 'false';
  opt2.innerHTML = "Has not been read";
  
}

function clearForm() {
  var form = document.getElementById('book-form');
  
  form.reset();
}

function clearTable(){
  var tableBody = document.getElementById('library-books');
  tableBody.innerHTML = "";
}

function getQueryValues() {
  queryDict = {};
  var title = document.querySelector('#title');
  var author = document.querySelector('#author');
  var numPages = document.querySelector('#num-pages');
  var read = document.querySelector('#read');
  queryDict[0] = title.value;
  queryDict[1] = author.value;
  queryDict[2] = numPages.value;
  queryDict[3] = read.value === "true" ? true : false;
  console.log(read.value);
}

function loadTable() {
  clearTable();
  for (var i = 0 , len = myLibrary.length; i < len; i++ ){
    var curBook = myLibrary[i];
    var table = document.querySelector('#library-books');
    var tr = document.createElement("tr");
    var curRow = table.appendChild(tr);
    
    curRow.setAttribute("data-id", i);
    curRow.insertCell(0).innerHTML = curBook.title;
    curRow.insertCell(1).innerHTML = curBook.author;
    curRow.insertCell(2).innerHTML = curBook.numPages;
    curRow.insertCell(3).innerHTML = curBook.readMsg;
    curRow.insertCell(4).innerHTML = "<a href='#'>Remove Book</a>";
    
    //curRow
    
    console.log('Library loaded');
  }
}