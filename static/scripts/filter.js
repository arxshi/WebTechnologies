const items = [
    { "name": "English Language", "year": "1", "type": "General science" },
    { "name": "Software Design Patterns", "year": "2", "type": "Computer science" },
    { "name": "Calculus", "year": "1", "type": "Mathematics science" },
    { "name": "Kazakh Language", "year": "2", "type": "General science" },
    { "name": "Introduction to Programming", "year": "1", "type": "Computer science" },
    { "name": "Discrete Mathematics", "year": "1", "type": "Mathematics science" },
    { "name": "Operational Systems", "year": "2", "type": "Computer science"},
    { "name": "Probability and Statistics", "year": "2", "type": "Mathematics science"}
];

const cardContainer = document.querySelector('.card-container');
const filterBtns = document.querySelectorAll('.filter-btn');

let filters = {
    year: new Set(),
    type: new Set()
};

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterType = btn.classList.contains('year') ? 'year' : 'type';
        const filterValue = btn.textContent;

        btn.classList.toggle('active-choice');
        
        if (btn.classList.contains('active-choice')) {
            filters[filterType].add(filterValue);
        } else {
            filters[filterType].delete(filterValue);
        }

        updateCardDisplay();
    });
});

function updateCardDisplay() {
    const filteredItems = items.filter(item => {
        const matchesYear = filters.year.size === 0 || filters.year.has(item.year);
        const matchesType = filters.type.size === 0 || filters.type.has(item.type);
        return matchesYear && matchesType;
    });

    renderCards(filteredItems);
}

function renderCards(items) {
    clearContent(cardContainer);

    items.forEach(item => {
        cardContainer.insertAdjacentHTML('beforeend', `
            <div class="card">
                <div class="card-element left">Subject: ${item.name}</div>
                <div class="card-element center">Year: ${item.year}</div>
                <div class="card-element right">Type: ${item.type}</div>
            </div>
        `);
    });
}

function clearContent(element) {
    element.innerHTML = '';
}

updateCardDisplay();
