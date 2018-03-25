'use strict';
var myApp = myApp || {};
(function name(params) {
    myApp.PrintNumbers = function printNumbers() {
        let result = "";
        for (let i = 1; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                result += "BizzAppz ";
            }
            else if (i % 3 == 0) {
                result += "Bizz ";
            }
            else if (i % 5 == 0) {
                result += "Appz ";
            }
            else {
                result += i + ' ';
            }
        }

        document.getElementById("result_1").innerText = result;
    }
})(myApp);