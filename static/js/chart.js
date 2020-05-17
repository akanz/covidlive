
$(document).ready(function () {

   //Line Chart
        // Our labels along the x-axis
 var speedCanvas = document.getElementById("line-chart");

        Chart.defaults.global.defaultFontFamily = 'Roboto';
        Chart.defaults.global.defaultFontSize = 12;
        Chart.defaults.global.defaultFontStyle = 'Normal';

        // Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];


// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];

        var speedData = {
          labels: years,

       datasets: [{
            label: "",
            data: africa,
            borderWidth: 5,
            fill: false,
           borderColor: "#3e95cd",
            backgroundColor: 'transparent',
            pointBorderColor:  "#3e95cd",
            pointBackgroundColor: '#FFFFFF',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 4,
            pointStyle: 'circle',
            lineTension: 0.5
          },
          {
            label: "",
            data: asia,
            borderWidth: 5,
            fill: false,
            borderColor: '#54D8FF',
            backgroundColor: 'transparent',
            pointBorderColor: '#54D8FF',
            pointBackgroundColor: '#FFFFFF',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 4,
            pointStyle: 'circle',
            lineTension: 0.5
          },
           {
            label: "",
            data: europe,
            borderWidth: 5,
            fill: false,
            borderColor: "#8e5ea2",
            backgroundColor: 'transparent',
            pointBorderColor: '#54D8FF',
            pointBackgroundColor: '#FFFFFF',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 4,
            pointStyle: 'circle',
            lineTension: 0.5
          },
           {
            label: "",
            data: northAmerica,
            borderWidth: 5,
            fill: false,
             borderColor: "#e8c3b9",
            backgroundColor: 'transparent',
            pointBorderColor: '#54D8FF',
            pointBackgroundColor: '#FFFFFF',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 4,
            pointStyle: 'circle',
            lineTension: 0.5
          },
           {
            label: "",
            data: latinAmerica,
            borderWidth: 5,
            fill: false,
            borderColor: "#c45850",
            backgroundColor: 'transparent',
            pointBorderColor: '#54D8FF',
            pointBackgroundColor: '#FFFFFF',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 4,
            pointStyle: 'circle',
            lineTension: 0.5
          },
          ]
        };

        var chartOptions = {
         title: {
        display: true,
        text: 'Coronavirus stats till date',
        fontColor: '#000000',
        },
    legend: {
        display: false
     },

          scales: {
            xAxes: [{
                gridLines: {
                    display: true,
                    color:'#517BB7',
                },

                ticks: {
                    fontColor:"#000000",
                },


            }],

            yAxes: [{
                gridLines: {
                    display: true,
                    color:'#517BB7',
                },

                ticks: {
                    fontColor:"#000000",
                }
          }],
            }
        };

        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          data: speedData,
          options: chartOptions
        });


});