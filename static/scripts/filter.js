const items = [
    {
        "name": "English Language",
        "year": "1",
        "type": "General science"
    },
    {
        "name": "Software Design Patterns",
        "year": "2",
        "type": "Computer science"
    },
    {
        "name": "Calculus",
        "year": "1",
        "type": "Mathematics science"
    },
    {
        "name": "Kazakh Language",
        "year": "2",
        "type": "General science"
    },
    {
        "name": "Introduction to Programming",
        "year": "1",
        "type": "Computer science"
    },
    {
        "name": "Discrete Mathematics",
        "year": "1",
        "type": "Mathematics science"
    }
]

const cardContainer = document.querySelector('.card-container');

const finalItems = new Set();

const toggledFilters = [];

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle("active-choice");
        if(toggledFilters.includes(btn.textContent)) {
            delete toggledFilters[toggledFilters.indexOf(btn.textContent)];
            if(btn.classList.contains('year')) {
                items.filter(i => {
                    if(i.year === btn.textContent) {
                        finalItems.delete(i);
                    }
                })
            }
            if(btn.classList.contains('type')) {
                items.filter(i => {
                    if(i.type === btn.textContent) {
                        finalItems.delete(i);
                    }
                })
            }
        } else {
            toggledFilters.push(btn.textContent);
            if(btn.classList.contains('year')) {
                items.filter(i => {
                    if(i.year === btn.textContent) {
                        finalItems.add(i);
                    }
                })
            }
            if(btn.classList.contains('type')) {
                items.filter(i => {
                    if(i.type === btn.textContent) {
                        finalItems.add(i);
                    }
                })
            }
        }

        if(toggledFilters.length === 0) {
            items.forEach(i => {
                finalItems.add(i);
            })
        }

        clearContent(cardContainer);
        showItems()
    });
})

function clearContent(element) {
    element.innerHTML = ''
}

function showItems() {
    finalItems.forEach(i => {
        cardContainer.insertAdjacentHTML('afterbegin',
            `
            <div class="card">
                <div class="card-element">
                    Subject: ${i.name}
                </div>
                <div class="card-element">
                    Year: ${i.year}
                </div>
                <div class="card-element">
                    Type: ${i.type}
                </div>
            </div>
            `
        )
    });
}