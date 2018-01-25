let myLibrary = [];

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

function addBookToLibrary() {
  var queryDict = {};
  document.location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]});
  var book = new Book(queryDict[0], queryDict[1], queryDict[2], queryDict[3]);
  myLibrary.push(book);
}

function buildForm() {
  var f = document.createElement("form");
  document.body.appendChild(f);
  
  var t = document.createElement("input"); //input element, text
  t.setAttribute('type',"text");
  t.setAttribute('name',"title");
  t.setAttribute('placeholder',"Title");
  
  
  var a = document.createElement("input"); //input element, text
  a.setAttribute('type',"text");
  a.setAttribute('name',"author");
  a.setAttribute('placeholder',"Author");
  
  var p = document.createElement("input"); //input element, text
  p.setAttribute('type',"text");
  p.setAttribute('name',"numPages");
  p.setAttribute('placeholder',"Number of Pages");
  
  
  var r = document.createElement("select");
  r.setAttribute('type', 'select');
  r.setAttribute('name', 'read');
  
  var s = document.createElement("button"); //input element, Submit button
  s.setAttribute('value',"Add Book");
  s.innerHTML = 'Add Book'
  
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

function removeBookFromLibrary(book) {
  // add logic
}


function loadTable() {
  for (var i = 0 , len = myLibrary.length; i < len; i++ ){
    var curBook = myLibrary[i];
    var table = document.querySelector('.library');
    var tr = document.createElement("tr");
    var curRow = table.appendChild(tr);
    curRow.insertCell(0).innerHTML = curBook.title;
    curRow.insertCell(1).innerHTML = curBook.author;
    curRow.insertCell(2).innerHTML = curBook.numPages;
    curRow.insertCell(3).innerHTML = curBook.readMsg;
    console.log('loaded');
  }
}