'use strict';
var myApp = myApp || {};
(function () {
    myApp.onFileInputChange = () => {
        let reader = new FileReader();
        reader.onload = function () {
            let data = reader.result.split(";").join(" ").split("\n");
            let result = {};
            for (let i = 1; i < data.length - 1; i++) {
                let date = data[i].split(" ")[0];
                let isYes = data[i].split(" ")[2].trim() == "yes";

                if (!result[date]) {
                    result[date] = {
                        y: isYes ? 0 : 1,
                        t: 1
                    };
                } else {
                    isYes && result[date].y++;
                    result[date].t++;
                }
            }
            // Fromatted object
            document.getElementById('out').innerText = JSON.stringify(result);

            let xAxisData = [];
            let yAxisData = [];
            Object.keys(result).forEach(function (key) {
                let yesPercentage = (result[key].y / result[key].t) * 100;
                xAxisData.push(key);
                yAxisData.push(yesPercentage);
            });

            let ctx = document.getElementById('canvas').getContext('2d');
            let myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xAxisData,
                    datasets: [{
                        label: 'percentage of Votes in favor',
                        data: yAxisData,
                        fill: false,
                        borderColor: 'rgb(44, 109, 214)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Percentage"
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "Date (Timeline)"
                            }
                        }]
                    }
                }
            });

        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(document.getElementById("csv").files[0]);
    };

})(myApp)
