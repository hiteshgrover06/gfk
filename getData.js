'use strict';
var myApp = myApp || {};
(function () {
    myApp.GetData = function getData() {
        let outputElement = document.getElementById('result_3');
        outputElement.innerText = '';

        let p1 = new Promise((resolve, reject) => {
            fetch(`https://cdn.gfkdaphne.com/tests/async.php?a=1`).then(response => {
                if (response.ok) {
                    response.text().then(data => {
                        resolve(data);
                    });
                }
                else {
                    //Reject when response is not OK
                    console.log("API 1 responded with error ", response);
                    reject('');
                }
            }).catch(function (err) {
                // Error
                console.log("API 1 call failed ", err);
                //Reject when API call failed
                reject(err);
            });
        });

        let p2 = new Promise((resolve, reject) => {
            fetch(`https://cdn.gfkdaphne.com/tests/async.php?a=2`).then(response => {
                if (response.ok) {
                    response.text().then(data => {
                        resolve(data);
                    });
                }
                else {
                    //Reject when response is not OK
                    console.log("API 2 responded with error ", response);
                    reject('');
                }
            }).catch(function (err) {
                // Error
                console.log("API 1 call failed ", err);
                //Reject when API call failed
                reject(err);
            });
        });


        Promise.all([p1, p2]).then(function (values) {
            outputElement.innerText = values.join(" ");
        }).catch(error => {
            console.log("one of the api calls failed");
        });
    }
})(myApp);
