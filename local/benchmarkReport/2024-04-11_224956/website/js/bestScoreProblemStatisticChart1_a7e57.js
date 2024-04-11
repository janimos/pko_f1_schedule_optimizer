
var chart_bestScoreProblemStatisticChart1_a7e57 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_a7e57'), {
    type: 'line',
    data: {
        labels: [
            2, 14, 17, 29, 30, 37, 43, 49, 54, 56, 64, 76, 85, 91, 102, 110, 125, 136, 232, 244, 248, 272, 445, 451, 479, 725, 862, 871, 1257, 1403, 1522, 1527, 1824, 1835, 1847, 2473, 2499, 2504, 6381, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , -6662, , , , -5739, , -4652, -4416, , , , , , , -4261, , , -3641, , , , , -3499, -3225, -3204, , , , -3178, -2857, -2619, , -2619
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , -6661, , -5921, , -5545, , -5116, , -4325, , -4074, , , -3906, -3773, -3712, -3583, -3377, , , , , , -3137, , , -2940, , , , -2877, -2866, -2396, , , , , -2396
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -8046, -7870, , -10492, , -7464, , , , -5552, , , , , , , , , , , -5095, , -4747, -4695, , , -4383, -3588, , , , , , , , , , , -3325, -3325
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
  chart_bestScoreProblemStatisticChart1_a7e57.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_a7e57.resize();
});
