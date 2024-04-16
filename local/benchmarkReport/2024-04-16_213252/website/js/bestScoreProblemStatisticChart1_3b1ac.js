
var chart_bestScoreProblemStatisticChart1_3b1ac = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_3b1ac'), {
    type: 'line',
    data: {
        labels: [
            0, 1, 2, 3, 5, 8, 10, 11, 12, 14, 15, 18, 21, 22, 23, 25, 29, 30, 31, 42, 44, 47, 56, 57, 65, 74, 89, 128, 167, 246, 254, 265, 292, 341, 347, 362, 408, 472, 474, 484, 487, 516, 566, 632, 641, 739, 778, 796, 833, 979, 1005, 1029, 1031, 1234, 1331, 1334, 1423, 1636, 1701, 2289, 2577, 2611, 3056, 3439, 3574, 3876, 7637, 8194, 8605, 10153, 10158, 13130, 14573, 14989, 18180, 20321, 20899, 21346, 21364, 22941, 25131, 25133, 26664, 26937, 28765, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , -4646, -4031, -3961, -3713, , -2977, -2923, , -2732, , , -2658, , , -2512, -2510, , -2357, -1984, , , , , , , , , , , , , , -1881, , , , , , , , , , , , , , -1750, , -1515, -1416, , , , , , , , -1288, -1279, , , , , , , , , , , , , -1215, , , , , , -1102, -1073, , , , -1073
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , -4646, , , , , -3327, , , , -2609, , , -1963, , , , , -1813, -1404, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -1124, , , , , , , , , , , , , , , -1108, , -1106, , -1080, -1019, , , -919, , , , -796, , -796
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , -4457, , , , , , , -3409, , , -2302, , , , -1872, , -1239, , -1083, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -915, -649, , , , , , , -649
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -6484, , , , , , , , , , , -5110, , -4076, , , , , , , , -3740, , , , , -3083, , , , -3053, -2723, , -2696, -2585, , -2448, -2343, -2246, , , , , , -1903, -1789, , , , , , , , -1638, , , , , , -1605, , , , -1466, , -1256, -1252, -1217, , -984, -936, , , , , , , , , , , , -897, , -861, -861
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -4175, , , -3865, , , , , -3842, , -3535, , , , , , -3450, -3278, , , -2510, , , , -2232, , -1915, , , , , , , , , , , , , , , , , , , -1788, -1228, , , , , , , -876, , , , , , , , , , , , , -840, , , , -756, , , , , , , , , , , , , -756
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -3337, , , , , , -3039, , , -2804, , , , , , , , , , , , , , , , , , , -2569, , , -2514, , , , , , , -2464, -2360, -1978, -1724, -1669, , , -1589, , , , -1501, , , , -1463, , , -1435, -1192, , , , -767, , -492, , , , , , , , , , , , , , , , , , , , , -492
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
                text: 'problem_2023_20 best soft score statistic'
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
                        stepSize: 100
                        
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
  chart_bestScoreProblemStatisticChart1_3b1ac.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_3b1ac.resize();
});
