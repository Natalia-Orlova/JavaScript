"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputFrom = document.querySelector('#from');
const span = document.querySelector('span');

inputFrom.addEventListener('input', function (e) {
    span.textContent = inputFrom.value;
});


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const msgBtn = document.querySelector('.messageBtn');
const msg = document.querySelector('.message');

msgBtn.addEventListener('click', function (e) {
    msg.classList.add('animate_animated', 'animate_fadeInLeftBig');
    msg.style.visibility = 'visible';
});


// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form');
const inputFormControl = document.querySelectorAll('.form-control');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    inputFormControl.forEach(element => {
        if (element.value === '') {
            element.classList.add('error');
        }
    });
});

form.addEventListener('input', function (e) {
    if (e.target.value === '') {
        e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
});