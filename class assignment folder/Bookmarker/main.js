document.querySelector('#myForm').addEventListener('submit',saveBookMark);
function saveBookMark(e){
	var siteName=document.querySelector('siteName').value;
	var siteUrl=document.querySelector('#siteUrl').value;

	var bookmark={
		name:siteName,
		url:siteUrl
	};

	if (localStorage.getItem('bookmarks') === null){
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

function fetchBookmarks(){
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	var bookmarksResult=document.querySelector('#bookmarksResult');
	bookmarksResult.innerHTML='';
	for (var i=0;i<bookmarks.length;i++){
		var name=bookmarks[i].name;
		var url=bookmarks[i].url;
		bookmarksResult.innerHTML+=
			'<div>'+
				'<h3>'
					+name+ ' ' +
					'<a class="btn btn-success" href= "'+url+'">Visit</a>' + 
					'<a class="btn btn-danger" onclick="deleteBookmark(\''+url+'\' )" href="#">Delete</a>' + 
				'</h3>' +
			'</div>'

}

}

function deleteBookmark(url){
	var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
	for (var i=0; i<bookmarks.length;i++){
		if(bookmarks[i].url==url){
			bookmarks.splice(i,1);
			break;
		}
	}
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
	fetchBookMarks();

}