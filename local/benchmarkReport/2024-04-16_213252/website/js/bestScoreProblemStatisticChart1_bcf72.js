
var chart_bestScoreProblemStatisticChart1_bcf72 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_bcf72'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 18, 19, 20, 21, 22, 23, 27, 29, 32, 34, 36, 41, 42, 56, 63, 72, 88, 95, 184, 229, 240, 325, 374, 447, 3191, 5210, 10610, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 1161, 1172, 1219, , 1255, , , 1256, 1258, , 1267, , , , , , , , , , , , , , , , , , , , 1269, 1271, 1277, , 1280, , , , 1281, 1281
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , 1186, , , 1209, , , , , 1222, 1240, , 1255, , , , 1260, , , , , , , , 1263, , , 1269, 1275, , , , , , , , , , , 1275
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , 1186, , , , , 1207, , , , , , , 1208, , , 1238, , , 1251, , 1271, , , 1275, , , , , , , , , , , , , 1278
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1137, 1200, , , 1206, , 1223, 1234, , , , , 1235, , 1238, 1247, , , 1259, , 1260, 1271, , , , , , , , , , , , , , , , , , , 1271
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    1207, , 1248, , , , , , , 1253, , , , , , 1260, 1263, , , , , , , 1271, , , , , , , 1274, , , , , , , 1275, 1276, , 1276
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1195, 1210, 1254, , , , , 1256, , , , , , , , , , , 1258, , 1267, , , , , , 1271, , , , , , , , 1274, , 1276, , , , 1276
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
                text: 'problem_5_10 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_bcf72.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_bcf72.resize();
});
