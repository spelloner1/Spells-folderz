//document.querySelector('#output').style.visibility="hidden";


document.querySelector('#inputValue').addEventListener('input',convert);
document.querySelector('#unit').addEventListener('input',convert);
function convert(e){
	//test the function is called
	//console.log("function is called");
let input= document.querySelector("#inputValue").value

let unit=document.querySelector('#unit').value;

switch(unit){
	case 'lbs':
		convertLbs(input);
		break;
	case 'grams':
		convertGrams(input);
		break;
	case 'kilograms':
		convertGrams(input);
		break;	
	case 'meters':
		convertMeters(input);
		break;

	}

	//pounds to grams
	 //let input = e.target.value;

	//pounds to kilograms
	//document.querySelector('#output').style.visibility="visibile";

	//pounds to ounces
	//document.querySelector('#gram').innerHTML=input*453.592;
	//document.querySelector('#kg').innerHTML=input*453.592/1000;
	//document.querySelector('#oz').innerHTML=input*16;


}

function convertLbs(num){

	console.log('Value is:'+ num);
	document.querySelector('#output').innerHTML=
	'<div class="card bg-primary mb-2">' +
		'<div class="card-header">' +
			'<h4> Grams:</h4>' +
			'<div>' + num * 453.592 + '</div>' +
		'</div>' +
	'</div>'+
	'<div class="card bg-success mb-2">'
		'<>div class="card-header">' +
			'<h4>Kilograms</h4>' +
			'<div>'+ num * 453.592/1000 +'</div>' +
		'</div>' +
	'</div>' +
	'<div class="card bg-danger">' +
		'<div class="card-header">' +
			'<h4>Ounces</h4>'
			'<div>' + num * 16 + '</div>' +
		'</div>'

	'</div>'	
}

function convertGrams(nums){

	
	document.querySelector('#output').innerHTML=
	'<div class="card bg-primary mb-2">' +
		'<div class="card-header">' +
			'<h4> Pounds:</h4>' +
			'<div>' + num * 0.00220462 + '</div>' +
		'</div>' +
	'</div>'+
	'<div class="card bg-success mb-2">'
		'<>div class="card-header">' +
			'<h4>Kilograms</h4>' +
			'<div>'+ value / 1000 +'</div>' +
			'<div>'+ num / 1000 +'</div>' +
		'</div>' +
	'</div>' +
	'<div class="card bg-danger">' +
		'<div class="card-header">' +
			'<h4>Ounces</h4>'
			'<div>' + value * 0.035274 + '</div>' +
			'<div>' + num * 0.035274 + '</div>' +
		'</div>'

	'</div>'	
}

function converMeters(nums){

	
	document.querySelector('#output').innerHTML=
	'<div class="card bg-primary mb-2">' +
		'<div class="card-header">' +
			'<h4> Miles:</h4>' +
			'<div>' + num * 0.000621371 + '</div>' +
		'</div>' +
	'</div>'+
	'<div class="card bg-success mb-2">'
		'<>div class="card-header">' +
			'<h4>Inches</h4>' +
			'<div>'+ num * 39.370066559999998 +'</div>' +
		'</div>' +
	'</div>' +
	
}