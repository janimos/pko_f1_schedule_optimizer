
var chart_bestScoreProblemStatisticChart1_1a07c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_1a07c'), {
    type: 'line',
    data: {
        labels: [
            2, 3, 6, 10, 16, 19, 20, 21, 22, 28, 33, 34, 40, 43, 53, 60, 69, 81, 84, 89, 96, 98, 101, 116, 135, 140, 163, 275, 286, 300, 316, 327, 339, 343, 349, 363, 368, 425, 613, 1090, 1182, 4504, 4540, 5064, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , , , , , , , 631, , , , 878, 1000, , 1075, , 1131, , 1132, 1189, , , , , , , , 1192, , 1195, , 1217, , 1222, , 1227, , , , 1227
                  ]
                }, 
{
                  label: 'Tabu 10 1000',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , 631, 847, , , , 1056, 1124, 1166, , , 1191, 1194, , , , 1199, , 1204, , , , , , , , , 1206, 1211, 1216, , , , , , , , 1218, , 1220, , 1222, 1222
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    754, 775, 944, , , 952, 964, 1073, , , , 1146, , , , 1150, , , , , , , 1159, , , 1162, 1174, 1176, 1177, , , , , 1180, , 1188, , 1200, , , , , 1201, , 1201
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
                text: 'problem_2023_6 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_1a07c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_1a07c.resize();
});
