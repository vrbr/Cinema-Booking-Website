const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-tag__total');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
        console.log();
    }
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});