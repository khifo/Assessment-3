console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
		alert('The form has been submitted successfully') 
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
const imageElement = document.querySelector('img'); // Select the image element

imageElement.addEventListener('mouseover', function() {
  alert('You have a great taste in pictures!');
});
