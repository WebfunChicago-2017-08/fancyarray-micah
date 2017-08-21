function fancyArray(uglyArray, symbol = '->', reverse) {
    var i;

    if (reverse) {
        for (i = uglyArray.length - 1; i >= 0; i--) {
            console.log(i, symbol, uglyArray[i]);
        }
    }
    else {
        for (i = 0; i < uglyArray.length; i++) {
            console.log(i, symbol, uglyArray[i]);
        }
    }
}

fancyArray(["a", "b", "c", "d"], '-->', false)