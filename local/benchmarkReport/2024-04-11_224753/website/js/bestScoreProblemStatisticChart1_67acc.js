
var chart_bestScoreProblemStatisticChart1_67acc = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_67acc'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 9, 10, 17, 22, 28, 33, 37, 46, 47, 52, 56, 65, 70, 71, 74, 78, 80, 85, 90, 97, 103, 108, 118, 119, 127, 135, 139, 153, 154, 162, 169, 243, 279, 286, 301, 327, 382, 413, 416, 427, 462, 515, 704, 735, 934, 939, 968, 1054, 1071, 1079, 1373, 1403, 1426, 1452, 1462, 1950, 2524, 2554, 2773, 2866, 2906, 3465, 3691, 4237, 4656, 7862, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , -1203, , , , , , -699, , , , -198, , 221, , 431, 506, , , , 644, , , , , , 647, 931, 960, , 1100, 1113, , , 1128, 1174, , , 1180, 1534, , , , , , , , , , 1619, , 1627, 1810, , , , 1813, , , , 1813
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , -1203, , -691, , -227, , 191, , 381, 724, , , 772, , 813, , 952, , , , , , 976, 1030, , 1039, , 1064, 1114, 1132, , , , 1138, , , 1143, , , , , , , , , 1167, 1217, 1265, , , , 1432, 1594, , 1619, , , 1633, 1681, 1694, , , 1923, , 1923
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -2258, -2252, -1233, -898, -655, , -628, , -450, -251, , , -43, , , 24, , , 169, , 212, , , 589, , , 615, , , , , 829, , , , , , , , , , , 889, , , 906, 1056, , , 1170, , , , 1180, 1404, 1521, , , , , , , , , , , 1618, , 1640, 1640
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
                text: 'problem_2023_15 best soft score statistic'
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
                suggestedMax: 10000,
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
  chart_bestScoreProblemStatisticChart1_67acc.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_67acc.resize();
});
