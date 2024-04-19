
var chart_bestScoreProblemStatisticChart1_7ef53 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_7ef53'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 7, 8, 12, 18, 21, 22, 23, 30, 31, 32, 39, 40, 41, 50, 57, 62, 76, 79, 94, 105, 130, 140, 152, 163, 169, 191, 199, 212, 242, 296, 307, 334, 354, 396, 399, 478, 606, 629, 639, 893, 894, 1243, 1269, 1888, 1993, 2013, 2027, 2596, 2684, 2690, 2989, 3513, 4525, 4529, 5087, 5900, 5915, 5927, 6030, 6037, 8345, 8382, 8680, 8731, 9218, 9769, 11087, 13609, 14242, 14245, 14404, 14429, 15753, 20291, 22865, 29334, 29371, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 2193, 2424, 2489, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2511, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2511
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , 2249, 2379, , , 2440, , , , 2484, , 2514, 2515, , , , , , , , , , , , , , , , , , , , , , , 2531, 2543, , , , , , , , , , , , , , , , , , , , 2556, 2573, 2586, 2602, , , , , , , , , , , , , , , , , , , , 2602
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , 2249, , 2435, , , , , , , , , , , 2482, 2488, , , 2497, 2525, , , 2538, 2546, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2554, , , , , , , , , , 2563, , , , 2564, 2568, 2591, 2591
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1445, , 2024, 1764, 1858, 1287, , , , 1641, 1776, , 1876, , , 1886, , 1910, , , 1960, , , , , , , 1977, 2004, 2079, , 2142, 2158, 2172, , , , , , , 2244, , , , 2265, 2287, , 2307, 2320, , , 2345, 2346, 2364, , 2423, , , , , , , , , , , , , , 2431, 2463, 2501, , 2510, , 2513, 2517, , , , , 2517
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1879, , , , , , , , 1974, , , , , , 2026, , 2037, , , 2153, , , , , , , , , , , , , , , 2246, , 2251, , , 2348, , , , 2378, , , , , , , , , , , , , 2388, 2421, , , , , 2451, 2491, , 2496, 2503, 2512, 2530, , , , , , , , , , , , , 2530
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    2328, 2047, , 2152, , , , , , , , , , , , , , , , , , , , 2196, 2221, , , , , , 2236, , , , , 2270, , , , , , 2304, 2305, , , , , , , 2356, 2364, , , , 2479, , , , , , , , , , , , , , , , , , 2508, , , , , 2514, , , , 2514
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
                text: 'problem_2023_full best soft score statistic'
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
                suggestedMax: 30000,
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
  chart_bestScoreProblemStatisticChart1_7ef53.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_7ef53.resize();
});
