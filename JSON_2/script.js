"use strict";

fetch("data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const productBox = document.querySelector('.product-box');
        data.forEach(({img, name, desc, price}) => {
            const productEl = `
                <div class="product">
                    <img src="${img}" alt="${name}" class="product__img">
                    <div class="product__info">
                        <a href="#" class="product__info_name">${name}</a>
                        <p class="product__info_desc">${desc}</p>
                        <p class="product__info_price">${price}</p>
                    </div>
                </div>
            `;
            productBox.insertAdjacentHTML("beforeend", productEl);
        });
    })


