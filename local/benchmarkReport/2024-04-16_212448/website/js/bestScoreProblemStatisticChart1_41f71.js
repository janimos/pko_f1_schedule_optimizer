
var chart_bestScoreProblemStatisticChart1_41f71 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_41f71'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 20, 28, 44, 49, 70, 71, 105, 106, 108, 153, 474, 499, 506, 534, 548, 697, 807, 894, 982, 1933, 2446, 3978, 5000
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    744, 775, 795, , , 1012, , , , , 1072, 1098, , 1142, 1174, , , 1178, , , 1182, 1186, , , , , 1190, , , 1194, , 1195, 1200, 1200
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    865, , 912, 981, 990, , 1044, 1148, , , , , 1156, 1158, , 1169, 1180, , , , , , 1183, 1193, , , , 1194, 1195, , 1198, , , 1198
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    814, 1038, 1058, , 1114, , , 1126, 1134, 1141, , , , , 1173, 1174, , , 1178, 1194, , , , , 1199, 1200, , , , , , , , 1200
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
  chart_bestScoreProblemStatisticChart1_41f71.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_41f71.resize();
});
