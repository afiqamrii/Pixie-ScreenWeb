// main.js
// left right button for poster



document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.querySelector('.search-header__input');
    const searchHistoryContainer = document.getElementById('search-history-container');
    const currentSearchTerm = document.getElementById('current-search-term');
    const searchHistorySection = document.getElementById('search-history');

    document.querySelector('.search-header__button').addEventListener('click', function() {
        const searchTerm = inputBox.value.trim();

        // Mockup: Replace this with your actual search history data
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

        // Only add the search term to the history if it's not already present
        if (!searchHistory.includes(searchTerm)) {
            searchHistory.push(searchTerm);

            // Save the updated search history in localStorage
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }

        // Display the current search term
        currentSearchTerm.textContent = searchTerm;

        // Display the updated search history
        displaySearchHistory(searchHistory, searchHistorySection);
    });

    function displaySearchHistory(history, container) {
        container.innerHTML = '';

        history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.textContent = item;

            // Add an 'x' icon for each search term
            const deleteButton = document.createElement('div');
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = '&times;';
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent the click event from triggering on the history item
                deleteSearchTerm(item);
            });

            historyItem.appendChild(deleteButton);

            historyItem.addEventListener('click', function() {
                inputBox.value = item;
                search();
                // Hide the search history after selecting an item
                searchHistoryContainer.style.display = 'none';
            });

            container.appendChild(historyItem);
        });

        if (history.length > 0) {
            searchHistoryContainer.style.display = 'block';
        } else {
            searchHistoryContainer.style.display = 'none';
        }
    }

    function deleteSearchTerm(term) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory = searchHistory.filter(item => item !== term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        // Update the displayed search history
        displaySearchHistory(searchHistory, searchHistorySection);
    }

    function search() {
        const searchTerm = inputBox.value.trim();
        console.log('Searching for:', searchTerm);

        // Your search logic here
    }

    document.addEventListener('click', function(e) {
        if (!inputBox.contains(e.target) && !searchHistoryContainer.contains(e.target)) {
            searchHistoryContainer.style.display = 'none';
        }
    });
});
    











