"use strict";
// checkbox
const checkbox = document.querySelectorAll('#discount-checkbox');
checkbox.forEach((element) => {
    element.addEventListener('change', function () {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

//Корзина
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');
const counterGoods = document.querySelector('.counter');
btnCart.addEventListener('click', function () {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', function () {
    modalCart.style.display = '';
    document.body.style.overflow = '';
});

// Работа с товаром
const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const empty = document.getElementById('cart-empty');
cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        empty.remove();
        showData();
    });
});
function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    counterGoods.textContent = cardsCart.length;
}
