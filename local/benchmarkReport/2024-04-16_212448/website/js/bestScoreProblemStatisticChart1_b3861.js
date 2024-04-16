
var chart_bestScoreProblemStatisticChart1_b3861 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b3861'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 6, 9, 13, 16, 22, 36, 38, 55, 58, 76, 118, 127, 131, 137, 163, 172, 194, 196, 215, 229, 475, 477, 529, 606, 636, 870, 915, 1034, 1054, 1221, 1341, 1416, 1981, 2544, 2685, 3729, 5000
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8046, , , , , , -8367, , -7017, -6934, -6740, , -5809, , , , , , , , -5283, -4826, , -4116, , , , , , , , , , , -3777, , -3734, -3712, -3517, -3325, -3325
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -6503, , -5881, , , , , -5611, , , , -5466, , , -5026, , , -4730, -4720, -4224, , , , , , , , -3668, -3175, , , , , , , , , , , , -3175
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , -7026, , -6502, -6186, -5497, , , , , -5440, , , -5347, , -5283, -5125, , , , , , -4809, , -4568, -4237, -4004, , , -3993, -3459, -3406, -3173, -2806, , -2670, , , , , -2670
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
  chart_bestScoreProblemStatisticChart1_b3861.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b3861.resize();
});
