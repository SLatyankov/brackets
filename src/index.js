module.exports = function check(str, bracketsConfig) {
    var obj = {};
    bracketsConfig.forEach(element => {
        obj[element[0]] = element[1];
    });
    var arr = str.split('');
    console.log(arr);

    for (j = 0; j < 10; j++) {
        for (i = 0; i < arr.length - 1; i++) {

            if (obj[arr[i]] === arr[i + 1]) {
                arr.splice(i, 2);
                i = 0;
            };
        }

    }
    console.log(arr);
    return arr.length == 0;
}
