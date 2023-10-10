import { dataHP } from "./data.js";
const data = JSON.parse(dataHP);
console.log(data);

const header = document.createElement("div");
document.body.appendChild(header);
header.classList.add("header");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.border = "2px solid rgb(75, 19, 2)";
header.style.backgroundImage = "url(img/hogwarts.jpg)";
header.style.backgroundSize = "cover";

const title = document.createElement("h1");
header.appendChild(title);
title.textContent = "WIZARDS OF HOGWARTS";
title.style.color = "gold";
title.style.webkitTextStroke = "1px black";

const content = document.createElement("div");
document.body.appendChild(content);
content.style.paddingTop = "32px";
content.classList.add("content");
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.flexWrap = "wrap";
content.style.gap = "20px";
content.style.backgroundImage = "url(img/background.jpg)";
content.style.backgroundSize = "cover";

data.forEach(({ name, species, house, dateOfBirth, ancestry, image }) => {
  if (image !== "") {
    const cardBox = document.createElement('div');
    content.appendChild(cardBox);
    cardBox.classList.add('card');
    cardBox.style.display = 'flex';
    cardBox.style.justifyContent = 'center';
    cardBox.style.alignItems = 'center';
    cardBox.style.border = '1px solid rgb(75, 19, 2)';
    cardBox.style.padding = '10px';
    cardBox.style.boxShadow = '10px 5px 5px rgba(0,0,0,0.33)';
    cardBox.style.backgroundImage = ('url(img/hp1.jpg)');
    cardBox.style.backgroundSize = ('cover');
    cardBox.style.perspective = ('1000px');
    

    //Внешняя сторона карточки
    const cardBoxFront = document.createElement('div');
    cardBox.appendChild(cardBoxFront);
    cardBoxFront.classList.add("cardFront");
    cardBoxFront.style.backfaceVisibility = ('hidden');
    cardBoxFront.style.transition = ('1s');
    const cardImg = document.createElement('img');
    cardBoxFront.appendChild(cardImg);
    cardImg.src = image;
    cardImg.width = 200;
    cardImg.height = 280;

    const cardName = document.createElement('h3');
    cardBoxFront.appendChild(cardName);
    cardName.textContent = name;
    cardName.style.color = '#690303';


    //Оборотная сторона карточки
    const cardBoxBack = document.createElement('div');
    cardBox.appendChild(cardBoxBack);
    cardBoxBack.classList.add('cardBack');
    cardBoxBack.style.position = ('fixed');
    cardBoxBack.style.backfaceVisibility = ('hidden');
    cardBoxBack.style.transform = ('rotateY(180deg)');
    cardBoxBack.style.transition = ('1s');
    cardBoxBack.style.color = '#690303';
    cardBoxBack.style.textAlign = ('center');
    
    
    const heroSpecies = document.createElement('h4');
    heroSpecies.textContent = `Species: ${species}`;
    cardBoxBack.appendChild(heroSpecies);

    const heroHouse = document.createElement('h4');
    heroHouse.textContent = `House: ${house}`;
    cardBoxBack.appendChild(heroHouse);

    const heroBirthday = document.createElement('h4');
    heroBirthday.textContent = `Date of birth: ${dateOfBirth}`;
    cardBoxBack.appendChild(heroBirthday);

    const heroAncestry = document.createElement('h4');
    heroAncestry.textContent = `Ancestry: ${ancestry}`;
    cardBoxBack.appendChild(heroAncestry);
    

// разворот карточки при наведении
    cardBox.onmouseover = function () {
        cardBoxFront.style.transform = ('rotateY(180deg)');
        cardBoxBack.style.transform = ('rotateY(360deg)');
    }

    cardBox.onmouseout = function () {
        cardBoxFront.style.transform = ('rotateY(360deg)');
        cardBoxBack.style.transform = ('rotateY(180deg)');
    }
  }
});
