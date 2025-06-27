// Remove the main element from the DOM
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Assign it the ID 'victory'
newHeader.id = 'victory';

// Set its content to include your name
newHeader.textContent = 'Jesse Matara is the champion';

// Add it to the DOM
document.body.append(newHeader);
