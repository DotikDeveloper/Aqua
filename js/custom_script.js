// calculator -----------------------------------------------------------------------

const bottle = document.querySelector('#customNumberBottleRange'),
    bottleRange = document.querySelector('#customNumberBottleValue'),
    price = document.querySelector('#customPriceBottleRange'),
    priceRange = document.querySelector('#customPriceBottleValue'),
    quantityForFirstYearValue = document.querySelector('.quantity__value--first-year'),
    quantityForSecondYearValue = document.querySelector('.quantity__value--second-year');

    quantityForFirstYearValue.textContent = +(bottle.value * price.value * 12 - 45000);
    quantityForSecondYearValue.textContent = +(bottle.value * price.value * 12 - 12000);

    bottleRange.textContent = bottle.value;
    priceRange.textContent = price.value;

function updateInput(range, rangeValue) {
    range.addEventListener('input', updateValue);

    function updateValue(e) {
        rangeValue.textContent = e.target.value; //вывод количества бутылок
        const quantityPerYear = bottle.value * price.value * 12; // затраты в год при покупке                
        quantityForFirstYearValue.textContent = +(quantityPerYear - 45000); //экономия в первый год вывод в форму
        quantityForSecondYearValue.textContent = +(quantityPerYear - 12000); //экономия во второй год вывод в форму
    }
}

updateInput(bottle, bottleRange);
updateInput(price, priceRange);

// calculator end -------------------------------------------------------------

//arenda-----------------------------------------------------------------------

$(function () {
    $('.material-tooltip-main').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner"></div></div>'
    });
  })

//arenda end-------------------------------------------------------------------

// scroll -----------------------

const anchors = document.querySelectorAll('a.scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// scroll -----------------------