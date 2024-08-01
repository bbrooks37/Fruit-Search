// creating a variable to store the input and suggestions
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// creating an array of fruits
const fruit = ['Apple🍎', 'Apricot', 'Avocado 🥑', 'Banana🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry🫐', 'Boysenberry', 'Currant', 'Cherry🍒', 'Coconut🥥', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit🥝', 'Kumquat', 'Lemon🍋', 'Lime🍋‍🟩', 'Loquat', 'Longan', 'Lychee', 'Mango🥭', 'Mangosteen', 'Marionberry', 'Melon🍈', 'Cantaloupe', 'Honeydew', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive🫒 ', 'Orange🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach🍑', 'Pear🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple🍐', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry🍓', 'Tamarillo', 'Tamarind', 'Tomato🍅' , 'Watermelon🍉', 'Yuzu'];

// creating a function to search for the fruits
function search(str) {
	let results = [input.value];
    // looping through the fruits
    fruit.forEach(fruit => {
        // checking if the fruit starts with the input value
        if (fruit.toLowerCase().startsWith(str.toLowerCase())) {
            // adding the fruit to the results
            results.push(fruit);
        }
    });

	return results;
}

// creating a function to display the fruit list
function showSuggestions(results, inputVal) {
    // creating a variable to store the list of fruits
    let list = '';
    // looping through the results
    results.forEach(result => {
        // adding the fruit to the list
        list += `<li>${result}</li>`;
    });
    // displaying the list of fruits
    suggestions.innerHTML = list;
}
// creating a function to handle the search
function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
	
}


// creating a function to use the suggestion
function useSuggestion(e) {
    const selectedFruit = e.target.textContent;
    input.value = selectedFruit;
    suggestions.innerHTML = '';
}
// adding event listeners to the input and suggestions
document.getElementById('fruit').addEventListener('keyup', function(e) {
  const input = e.target.value.toLowerCase();
  const suggestions = document.querySelector('.suggestions ul');
  const results = fruit.filter(fruit => fruit.toLowerCase().includes(input));
  suggestions.innerHTML = results.map(result => `<li>${result}</li>`).join('');
});
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);