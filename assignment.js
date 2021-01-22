
//funtion for converting a number kilometer to meter

function kilometerToMeter(numberInKilometer) {
    if(numberInKilometer < 0) {
        return 'Invalid input!';
    }
    else{
    var numberInMeter = numberInKilometer * 1000;
    return numberInMeter;
    }
}
var result= kilometerToMeter(15);
console.log(result);





// function for calculating budget

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if((numberOfWatch < 0) || (numberOfPhone < 0) || (numberOfLaptop < 0)) {
        return 'Invalid input!';
    }

    else{
        var totalBudget = (numberOfWatch * watchPrice) + (numberOfPhone * phonePrice) + (numberOfLaptop * laptopPrice);
        return totalBudget;
    }
}
var result = budgetCalculator(5, 3, 2);
console.log(result);





//function for calculating hotel cost

function hotelCost(numberOfDays) {
    var firstTenDaysCost = 100;
    var secondTenDaysCost = 80;
    var restOfDaysCost = 70;
    var totalCost = 0;

    if(numberOfDays <= 0) {
        return 'Invalid input!';
    }
    else{
        for(var i = 1; i <= numberOfDays; i++) {
            if(i >= 1 && i <= 10) {
                totalCost += firstTenDaysCost;
            }
            else if(i >= 11 && i <=20 ) {
                totalCost += secondTenDaysCost;
            }
            else {
                totalCost += restOfDaysCost;
            }
        }
    }
    return totalCost;
}
var result = hotelCost(23);
console.log(result);





//function for finding the largest name from friends list

function megaFriend(friendsName){
    
    var largestName;
    var largestNameLength = 0;

    for (var i = 0; i < friendsName.length; i++) {
        
        if (friendsName[i].length > largestNameLength) {
        largestNameLength = friendsName[i].length;
        largestName = friendsName[i];
        }
    }

    return largestName;
}
var largestString = megaFriend(['sumaiya', 'proma', 'mustahina', 'ria'])
console.log(largestString);









