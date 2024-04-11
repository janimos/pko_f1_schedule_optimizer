
var chart_bestScoreProblemStatisticChart1_c3c9e = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_c3c9e'), {
    type: 'line',
    data: {
        labels: [
            1, 16, 27, 37, 40, 43, 50, 58, 69, 79, 94, 104, 115, 125, 136, 143, 144, 220, 267, 271, 289, 355, 360, 607, 714, 789, 1009, 1019, 1973, 3736, 4898, 4985, 5986, 7786, 9122, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -4646, , -3327, -2609, -2600, -2555, -2102, -1992, , , , , , , , -1269, , -1156, , , , , , , , , -1080, , -1080
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -4498, -3468, , -2306, , -1539, , -1469, , , , , , , , , , -1438, , , , , -1271, , , -1184, -1022, , , , -601, , , , -601
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -6484, , , -5154, , -3619, , , , , , , , , , -3537, -3266, -2855, , -2631, -2105, -2090, , , , -1926, , , -1591, -1571, -1527, , -1242, , -1238, -1238
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
  chart_bestScoreProblemStatisticChart1_c3c9e.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_c3c9e.resize();
});
