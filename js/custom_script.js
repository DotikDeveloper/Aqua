// calculator

let bootle = 100; // кол-во бутылок в мес

let price = 200; // стоимость бутылки

let expensesPerFirstYear = 45000; // затраты в первый год
console.log('expensesPerFirstYear: ', expensesPerFirstYear);

let expensesPerSecondYear = 12000; // затраты во второй год

let expensesPerYear = bootle * price * 12; //затраты в год при покупке бутылок
console.log('expensesPerYear: ', expensesPerYear);

let priceOneLiter = +(price / 19).toFixed(2); // стоимость одного литра в бутылях
console.log('priceOneLiter: ', priceOneLiter);

let economyForFirstYear = expensesPerYear - expensesPerFirstYear; //экономия в первый год
console.log('economyForFirstYear: ', economyForFirstYear);

let economyForSecondYear = expensesPerYear - expensesPerSecondYear; // экономия во второй год
console.log('economyForSecondYear: ', economyForSecondYear);

let priceOneLiterPuryfaier = +(expensesPerSecondYear / 30000).toFixed(2); // стоимость литра в пурифайере
console.log('priceOneLiterPuryfaier: ', priceOneLiterPuryfaier);


