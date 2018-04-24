

let filterInput = document.querySelector('#filter');
filterInput.addEventListener('keyup',filterNames);
function filterNames(){
	
	let filterValue = filterInput.value.toUpperCase();
	let li = document.querySelectorAll('li.sw-link');
	for(let i = 0;i<li.length;i++){
		
		let a = li[i].querySelector('a');

		
		if(a.innerHTML.toUpperCase().includes(filterValue)){
			li[i].style.display = 'block';
		}

		else{
				li[i].style.display = 'none';

		}
	}
}

