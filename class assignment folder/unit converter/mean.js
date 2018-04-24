//document.querySelector('#output').style.visibility="hidden";


document.querySelector('#inputValue').addEventListener('input',convert);
function convert(e){
	//test the function is called
	//console.log("function is called");
	
	//pounds to grams
	 let input = e.target.value;

	//pounds to kilograms
	document.querySelector('#output').style.visibility="visibile";

	//pounds to ounces
	document.querySelector('#gram').innerHTML=input*453.592;
	document.querySelector('#kg').innerHTML=input*453.592/1000;
	document.querySelector('#oz').innerHTML=input*16;


}