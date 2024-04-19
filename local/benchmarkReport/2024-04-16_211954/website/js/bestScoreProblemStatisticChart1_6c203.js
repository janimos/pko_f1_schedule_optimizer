
var chart_bestScoreProblemStatisticChart1_6c203 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_6c203'), {
    type: 'line',
    data: {
        labels: [
            2, 3, 4, 5, 7, 8, 9, 11, 15, 18, 19, 22, 27, 33, 35, 42, 44, 49, 51, 63, 68, 91, 100, 111, 135, 146, 229, 260, 329, 339, 491, 1317, 1327, 1358, 1609, 1763, 2087, 2219, 2229, 2438, 4190, 5000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    813, 1285, 1740, 1842, 1940, 2031, 2259, 2444, , , , , , , , , 2605, , , , , , , , , , , , , , 2617, , , , , 2625, , , , 2642, 2652, 2652
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , 912, , , 1345, , 1768, 1926, 2133, , 2140, , 2187, , , , 2194, , 2218, 2270, 2322, 2324, 2327, , , 2370, 2402, 2586, , , , , , 2651, , , , , , , 2651
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , 942, , , 1333, , 1734, , 1984, 2159, , , 2289, , , , , , 2319, 2402, , , , 2417, , 2484, 2565, 2580, , , 2625, 2633, 2697, , , 2697
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'problem_2023_10 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 5000,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10
                        
                },
                type: 'linear',
                display: true
            }
        },
watermark: {
    image: "website/webjars/timefold/img/timefold-logo-stacked-positive.svg",
    x: 15,
    y: 15,
    width: 48,
    height: 50,
    opacity: 0.1,
    alignX: "right",
    alignY: "bottom",
    alignToChartArea: true,
    position: "front",
}    },
plugins: [{ 
    id: 'customPlugin',
    beforeDraw: (chart, args, options) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
          ctx.restore();
    }
}]
});

window.addEventListener('beforeprint', () => {
  chart_bestScoreProblemStatisticChart1_6c203.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_6c203.resize();
});
