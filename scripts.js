// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    const gameArticles = document.querySelectorAll('main .game');

    searchButton.addEventListener('click', () => {
        const searchText = searchInput.value.toLowerCase();
        gameArticles.forEach(article => {
            const title = article.querySelector('h2').innerText.toLowerCase();
            const description = article.querySelector('p').innerText.toLowerCase();
            if (title.includes(searchText) || description.includes(searchText)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
});
