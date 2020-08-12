// calculator

//let bottle = document.querySelector('#customNumberBottle').value; // кол-во бутылок в мес.
//console.log('bootle: ', bottle);

const bottle = document.querySelector('#customNumberBottleRange'),
    bottleRange = document.querySelector('#customNumberBottleValue'),
    price = document.querySelector('#customPriceBottleRange'),
    priceRange = document.querySelector('#customPriceBottleValue'),
    quantityForFirstYearValue = document.querySelector('.quantity__value--first-year'),
    quantityForSecondYearValue = document.querySelector('.quantity__value--second-year');
    
    
function updateInput(range, rangeValue) {
    range.addEventListener('input', updateValue);
    function updateValue(e) {
        rangeValue.textContent = e.target.value; //вывод количества бутылок
        const quantityPerYear = bottle.value * price.value * 12; // затраты в год




        quantityForFirstYearValue.textContent = quantityPerYear;
    }
}

updateInput(bottle, bottleRange);
updateInput(price, priceRange);


//let expensesPerFirstYear = 45000; // затраты в первый год
//console.log('expensesPerFirstYear: ', expensesPerFirstYear);

//let expensesPerSecondYear = 12000; // затраты во второй год

//let expensesPerYear = bootle * price * 12; //затраты в год при покупке бутылок
//console.log('expensesPerYear: ', expensesPerYear);

//let economyForFirstYear = expensesPerYear - expensesPerFirstYear; //экономия в первый год
//console.log('economyForFirstYear: ', economyForFirstYear);

//let economyForSecondYear = expensesPerYear - expensesPerSecondYear; // экономия во второй год
//console.log('economyForSecondYear: ', economyForSecondYear);

//let priceOneLiterPuryfaier = +(expensesPerSecondYear / 30000).toFixed(2); // стоимость литра в пурифайере
//console.log('priceOneLiterPuryfaier: ', priceOneLiterPuryfaier);