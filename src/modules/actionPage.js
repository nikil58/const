
export default function actionPage() {
    const actionCards = document.querySelectorAll('.goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const min = document.getElementById('min'),
        max = document.getElementById('max');
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');
    const goods = document.querySelector('.goods');
    const activeLi = document.querySelector('.catalog-list li.active');
    discountCheckbox.addEventListener('click', () => {
        actionCards.forEach((card) => {
            if (discountCheckbox.checked) {
                if (!card.querySelector('.card-sale')) {
                    card.parentNode.remove();
                }
            } else {
                goods.appendChild(card.parentNode);
                filterPrice();
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
    
    const catalogList = document.querySelector('.catalog-list');
    const allLi = catalogList.querySelectorAll('li');

    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        actionCards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else if(activeLi) {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
        allLi.forEach((elem)=>{
            elem.classList.remove('active');
        });
    });
}