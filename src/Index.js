"use strict";
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import actionPage from './modules/actionPage';
import addCard from './modules/addCard';
import toggleCart from './modules/toggleCart';
import toggleCheckBox from './modules/toggleCheckBox';
import renderCatalog from './modules/renderCatalog';
getData().then((data)=>{
    renderCards(data);
    renderCatalog();
    actionPage();
    addCard();
    toggleCart();
    toggleCheckBox();
});
