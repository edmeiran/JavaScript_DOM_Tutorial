
//var titles = document.getElementsByClassName('title')

//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

//Array.from(titles).forEach(function(item){
 //   console.log(item);
//})
    


//const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf)

//var books = document.querySelector('#book-list li .name');
//console.log(books);

//books = document.querySelectorAll('#book-list li .name');
//console.log(books)

//Array.from(books).forEach(function(book){
 //   console.log(book)
//})



//var books = document.querySelectorAll('#book-list li .name');

//Array.from(books).forEach(function(book){
//book.textContent += ' (book title)'
//})

//const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more books...</h2>';
//bookList.innerHTML += '<p>This is how you add HTML</p>';



//const banner = document.querySelector('#page-banner');

//console.log('#page-banner node type is:', banner.nodeType)
//console.log('#page-banner node name is:', banner.nodeName)
//console.log('#page-banner has child nodes:', banner.hasChildNodes())

//const clonedBanner = banner.cloneNode(true);
//console.log(clonedBanner);



//const bookList = document.querySelector('#book-list');

//console.log('the parent node is:', bookList.parentNode);
//console.log('the parent node is:', bookList.parentElement.parentElement);

//console.log(bookList.children);



//const bookList = document.querySelector('#book-list');

//console.log('book-list previous sibling is:', bookList.previousSibling)
//console.log('book-list previous element sibling is:', bookList.previousElementSibling)

//bookList.previousElementSibling.querySelector('p').innerHTML +='<br /> Too cool for everyone else!'


//git add. git const listItems = document.querySelectorAll('#book-list ul li');

//Array.from(listItems).forEach(function(item){
 /// item.addEventListener('click', (e) => {

   // const li = e.target.parentElement;
   // console.log('child element to remove:', li);
   // console.log('parent element to remove child from:', li.parentElement);
    //li.parentNode.removeChild(li);

  //});
//});

// prevent default behaviour

//const link = document.querySelector('#page-banner a');

//link.addEventListener('click', function(e){
  //e.preventDefault();
  //console.log('Navigation to', e.target.textContent, 'was prevented');
//});



  
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
   list.removeChild(li);
  }
});

//add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
   
//create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//add clases
bookName.classList.add('name');
deleteBtn.classList.add('delete');

//apend to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

//hide books

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!= -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none'
        }
    })
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else{
                panel.classList.remove('active');
            }
        })
    }
})

