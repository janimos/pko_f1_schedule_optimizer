
var chart_bestScoreProblemStatisticChart1_5c1e9 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_5c1e9'), {
    type: 'line',
    data: {
        labels: [
            0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 14, 15, 19, 23, 24, 28, 40, 44, 45, 51, 54, 55, 62, 79, 368, 373, 655, 850, 941, 1036, 1166, 1270, 1483, 1728, 1834, 3489, 5161, 5266, 6208, 6212, 7836, 7842, 7958, 14609, 14911, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , 1318, 1424, , 1432, 1441, , , , , , , 1459, , 1481, , , , , , , 1507, , 1511, 1518, , , , , , , 1539, 1561, , , , , , , , , , , , 1561
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , 1390, , 1424, , , , , 1448, 1482, , , , , , , 1541, , , , , , , , , 1543, , , , , , , , , 1547, 1552, 1555, 1556, 1577, , , , 1589, , 1589
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , 1390, , 1418, , , 1435, 1447, , 1452, , 1461, , 1464, 1481, , , , , , , , 1485, 1487, 1521, 1533, 1537, , , 1544, , , , , , 1548, 1562, 1568, , 1576, 1576
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 1240, , , , , , , , 1369, , , , , , , , , , , , , , 1401, , , , , , , , , , , , , , , , , , , , , , 1401
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , 1281, , 1293, , , 1316, , , , 1318, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 1318
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1157, 1241, 1271, , , 1374, , 1391, , , , , , , , , , , , , 1408, 1458, , , , , , , , , , , , , , , , , , , , , , , , 1458
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
  chart_bestScoreProblemStatisticChart1_5c1e9.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_5c1e9.resize();
});
