module.exports = function toReadable(number) {

    let str = number + '';
    let arr = str.split('').reverse();
    let newArr = [];

    let singleObj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    let decimalFirstObj = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    let decimalSecondObj = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    let hundredObj = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',
    };

    let thousandObj = {
        1: 'one thousand',
        2: 'two thousand',
        3: 'three thousand',
        4: 'four thousand',
        5: 'five thousand',
        6: 'six thousand',
        7: 'seven thousand',
        8: 'eight thousand',
        9: 'nine thousand',
    };


    if (arr.length >= 4) {
        newArr.push(thousandObj.arr[arr.length - 1])
    }

    if (arr.length >= 3) {
        newArr.push(hundredObj[arr[2]])
    }

    if (arr.length >= 2) {
        if (arr[1] >= 2) {
            newArr.push(decimalSecondObj[arr[1]])
        } else if (arr[1] == 1) {
            let numb = '' + arr[1] + arr[0];
            newArr.push(decimalFirstObj[numb])
            return newArr.join(' ');
        }
    }

    if (arr.length >= 1) {
        newArr.push(singleObj[arr[0]])
    }

    if (newArr[newArr.length - 1] === 'zero' && newArr.length > 1) {
        newArr.pop()
    }

    return newArr.join(' ');
    
};
