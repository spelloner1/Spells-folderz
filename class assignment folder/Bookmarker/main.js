document.querySelector('#myForm').addEventListener('submit',saveBookMark);

document.querySelector('#filter').addEventListener('keyup',filterBookmarks);


function saveBookMark(e){
	var siteName=document.querySelector('#siteName').value;
	var siteUrl=document.querySelector('#siteUrl').value;

	var bookmark={
		name:siteName,
		url:siteUrl
	};

	if (bookmark.name==''|| bookmark.url ==''){

		alert('Please fill in the form');
		return false;
	}


	if(localStorage.getItem('bookmarks')===null){

	var bookmarks=[];
	bookmarks.push(bookmark);

	localStorage.setItem('bookmarks',JSON.stringify(bookmarks))

	}

	
	else{
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	bookmarks.push(bookmark);

	localStorage.setItem('bookmarks',JSON.stringify(bookmarks))

}

document.querySelector('#myForm').reset();
fetchBookMarks();
e.preventDefault();
}


function fetchBookMarks(){
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	var bookmarksResult=document.querySelector('#bookmarksResult');
	bookmarksResult.innerHTML='';
	for (var i=0;i<bookmarks.length;i++){
		var name=bookmarks[i].name;
		var url=bookmarks[i].url;
		bookmarksResult.innerHTML+=

		'<li class="list-group-item book">' +
		'<h3>'+ name + '</h3>'+
		'<a class= "btn btn-success" href="'+url+'">Visit</a>'+
		'<a class="btn btn-danger" onclick="deleteBookmark(\''+url+'\')" href="#">Delete</a>' + '</li>'
		

}

}

function deleteBookmark(url){

var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

for(var i=0;i<bookmarks.length;i++){
	if(bookmarks[i].url==url){
		bookmarks.splice(i,1);
		break;
	}
}

localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
fetchBookMarks();


}

function filterBookmarks(){

let filterValue = document.querySelector('#filter').value.toUpperCase();
let bookmarks=document.querySelectorAll('.book');
for(let i=0;i<bookmarks.length;i++){
let bookmarkName=bookmarks[i].querySelector('h3');
if(bookmarkName.innerHTML.toUpperCase().includes(filterValue)){
bookmarks[i].style.display="block";

} else{
	bookmarks[i].style.display="none";
}
}

}