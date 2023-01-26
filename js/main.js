const cards = document.querySelectorAll('.card__content');


cards.forEach(function(card) {
    card.addEventListener('click', () => {
        const icon = card.querySelector('.icon');

        card.classList.add('active')
        icon.classList.add('close');
    })    
})