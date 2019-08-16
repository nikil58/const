"use strict";
// checkbox
function toggleCheckBox() {
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
}



//корзина
function toggleCart() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.cart-close');

    btnCart.addEventListener('click', function () {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', function () {
        modalCart.style.display = '';
        document.body.style.overflow = '';
    });
}


// Работа с товаром
function addCard() {
    const cards = document.querySelectorAll('.goods .card');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const empty = document.getElementById('cart-empty');
    cards.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = "Убрать из корзины";
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card');
        const counterGoods = document.querySelector('.counter');
        counterGoods.textContent = cardsCart.length;
        const cardsPrice = cartWrapper.querySelectorAll('.card-price');
        const cardTotal = document.querySelector('.cart-total span');
        let sum = 0;


        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });
        cardTotal.textContent = sum;
        if (cardsCart.length !== 0) {
            empty.remove();
        } else {
            cartWrapper.appendChild(empty);
        }
    }
}


// фильтр и поиск
function actionPage() {
    const actionCards = document.querySelectorAll('.goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const min = document.getElementById('min'),
        max = document.getElementById('max');
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');
    const goods = document.querySelector('.goods');
    discountCheckbox.addEventListener('click', () => {
        actionCards.forEach((card) => {
            if (discountCheckbox.checked) {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'none';
                }
            } else {
                card.parentNode.style.display = "";
            }
        });
    });

    function filterPrice() {
        actionCards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent);
            if ((min.value && price < min.value) || (max.value && price > max.value)) {
                card.parentNode.remove();
            } else {
                goods.appendChild(card.parentNode);
            }
        });
    }
    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        actionCards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });
}

// получение данных с сервера 

function getData() {
    const goodsWrapper = document.querySelector('.goods');
     return fetch('../db/db.json').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные не были получены. Ошибка: ' + response.status);
            }
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style ="color: red; font-size: 30px"> Упс что-то пошло не так </div>'
        });
}

// выводим карточки товара 
function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `
                                <div class="card" data-category="${good.category}">
                                ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>':''}
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url('${good.img}')"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price" style="${good.sale ? 'color:red':''}">${good.price} ₽</div>
										<h5 class="card-title">${good.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
        `;
        goodsWrapper.appendChild(card);
    });

}

function renderCatalog(){
    const cards = document.querySelectorAll('.goods .card');
    const categories = new Set();
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWrapper = document.querySelector('.catalog');
    const catalogList = document.querySelector('.catalog-list');
    const checked = document.querySelector('.filter-check_checkmark');
    const discountCheckbox = document.getElementById('discount-checkbox');
    cards.forEach((card)=>{
        categories.add(card.dataset.category);
    });
    categories.forEach((item)=>{
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    catalogBtn.addEventListener('click', (event)=>{
        if (catalogWrapper.style.display){
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }
        if (event.target.tagName === 'LI'){
            checked.classList.remove('checked');
            discountCheckbox.checked = '';
            cards.forEach((card)=>{
                if (card.dataset.category !== event.target.textContent){
                    card.parentNode.style.display = 'none';
                } else {
                    card.parentNode.style.display = '';
                }
            });
        }
    });
}


getData().then((data)=>{
    renderCards(data);
    actionPage();
    addCard();
    toggleCart();
    toggleCheckBox();
    renderCatalog();
});
