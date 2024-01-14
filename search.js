// main.js

document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputBox');
    const searchHistoryContainer = document.getElementById('search-history-container');

    inputBox.addEventListener('input', function() {
        const searchTerm = inputBox.value.trim();

        // Mockup: You can replace this with actual search history data
        const searchHistory = ['Avengers', 'Inception', 'Spider-Man', 'Harry Potter'];

        displaySearchHistory(searchHistory);
    });

    // Function to display search history
    function displaySearchHistory(history) {
        searchHistoryContainer.innerHTML = '';

        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.textContent = item;

            historyItem.addEventListener('click', function() {
                inputBox.value = item;
                search();
            });

            searchHistoryContainer.appendChild(historyItem);
        });

        if (history.length > 0) {
            searchHistoryContainer.style.display = 'block';
        } else {
            searchHistoryContainer.style.display = 'none';
        }
    }

    // Function to perform search (replace this with your actual search logic)
    function search() {
        const searchTerm = inputBox.value.trim();
        console.log('Searching for:', searchTerm);

        // Your search logic here
    }

    // Close search history when clicking outside the inputBox
    document.addEventListener('click', function(e) {
        if (!inputBox.contains(e.target) && !searchHistoryContainer.contains(e.target)) {
            searchHistoryContainer.style.display = 'none';
        }
    });
});
