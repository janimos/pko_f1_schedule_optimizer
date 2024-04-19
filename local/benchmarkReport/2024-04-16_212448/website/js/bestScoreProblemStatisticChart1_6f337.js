
var chart_bestScoreProblemStatisticChart1_6f337 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_6f337'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 4, 7, 9, 13, 15, 16, 17, 21, 22, 25, 32, 33, 36, 49, 52, 55, 56, 59, 71, 93, 105, 107, 110, 135, 139, 275, 278, 281, 307, 313, 352, 375, 404, 451, 458, 462, 500, 522, 549, 770, 812, 839, 1035, 1245, 1327, 2349, 2413, 2517, 4914, 4944, 5000
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -2252, -1233, , -1036, , -845, -702, -606, -530, -381, , , , -167, -57, 127, , 166, 472, 700, , , , , , , , , , 743, 855, 872, 1052, , , , , , 1187, 1446, , , , , , , , 1479, 1626, 1681, 1748, 1748
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 201, , 214, , , , , , , 437, , 543, 974, , , , , , , , , , , , , 1051, , , , , , , , 1209, , , , , , , 1252, 1314, 1511, 1685, , , 1687, , , , , 1687
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -1186, -815, -650, , , -648, 355, , , , , 401, , , , , 439, 445, , , , 446, 534, 597, 957, 962, , 993, 1099, 1127, , , , , , 1173, 1202, 1327, 1335, , , , , , , 1445, 1823, , , , , , 1823
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
  chart_bestScoreProblemStatisticChart1_6f337.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_6f337.resize();
});
