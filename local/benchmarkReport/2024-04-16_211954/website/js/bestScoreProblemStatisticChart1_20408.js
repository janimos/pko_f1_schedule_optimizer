
var chart_bestScoreProblemStatisticChart1_20408 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_20408'), {
    type: 'line',
    data: {
        labels: [
            2, 4, 6, 7, 9, 11, 12, 13, 14, 16, 19, 21, 25, 26, 31, 32, 37, 42, 43, 52, 54, 59, 63, 74, 87, 101, 117, 133, 149, 165, 218, 262, 268, 276, 284, 313, 383, 385, 386, 513, 526, 634, 655, 660, 1398, 1457, 1825, 1838, 1906, 2320, 2364, 2379, 2525, 3446, 5000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -1242, -611, -112, 118, 176, , 362, , 662, 666, 834, , 950, , , , , , , , , , , , 980, , , , 1126, , , , , 1145, , , 1251, 1285, 1410, , , , , , 1620, 1691, , , , , , , , , 1691
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , -1203, , , , -695, , , -314, , , 123, , 242, 435, , 629, , 688, 1021, , , , , , , , , , 1023, 1105, , , 1207, , , , , , 1217, 1218, 1574, , , , , 1615, , , , 1657, 1757, 1757
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , -1201, , , , , , -690, , , -189, , , 169, , 672, , , 935, 936, , 1048, 1084, 1095, , 1190, 1226, , , , 1232, , , , , 1234, 1308, , , , , , 1313, 1440, , 1601, 1651, 1765, , , 1765
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
  chart_bestScoreProblemStatisticChart1_20408.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_20408.resize();
});
