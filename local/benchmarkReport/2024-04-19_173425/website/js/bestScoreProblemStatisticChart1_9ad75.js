
var chart_bestScoreProblemStatisticChart1_9ad75 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_9ad75'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 20, 21, 22, 29, 30, 31, 32, 38, 40, 50, 79, 85, 91, 98, 111, 177, 179, 181, 210, 241, 283, 342, 446, 480, 1143, 1166, 1341, 1548, 2207, 2364, 2499, 3691, 4461, 8211, 9347, 10025, 21039, 26927, 26941, 29736, 30000, 30001
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 427, 474, , 554, 566, , 569, , , , , , 590, , , , , , , , , , , , , , 596, , , , , , , , 603, 613, , , , , , , , , , , , 615, , , 618, 618, 
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , 485, , , , , 508, , 536, , , , , , , 539, , 573, , , 577, 578, , , , , , , 580, 583, , 589, , 604, , , , , , 609, , , , , , 610, 613, , , , , , 613, 
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , 485, , , , , , , 490, , 525, , , , , , , 549, , , 566, 580, 594, , , , , , , , , , , , , , 598, , , 607, , , 608, , , 611, , , , , , 611
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    346, 467, , 472, , , , , 502, 504, , , , 506, 514, , 518, , 553, , 554, , , , , 563, 583, , , , 594, , , , , , , , , , , , , , , , , , , , , , 594, 
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    439, 540, , , , , 574, , , , , , , , , , , , , , , , , , , , , , , , , , , , , 576, , , , , 584, , 591, , , , , , , 595, 596, , 596, 
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    491, 500, 531, , 560, , , , , , , 571, , , , , , , , , , , , , , , , , , , , , 577, , 588, , , 598, , , , , , 601, , , , , , , , , 601, 
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
                suggestedMax: 30001,
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
  chart_bestScoreProblemStatisticChart1_9ad75.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_9ad75.resize();
});
