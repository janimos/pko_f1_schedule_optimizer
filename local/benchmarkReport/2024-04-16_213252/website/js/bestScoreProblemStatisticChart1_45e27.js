
var chart_bestScoreProblemStatisticChart1_45e27 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_45e27'), {
    type: 'line',
    data: {
        labels: [
            1, 3, 4, 6, 7, 8, 9, 11, 13, 15, 18, 20, 21, 22, 29, 34, 38, 45, 59, 75, 78, 86, 92, 93, 95, 105, 110, 115, 125, 128, 132, 133, 135, 139, 142, 146, 148, 163, 175, 185, 202, 206, 234, 333, 483, 486, 499, 542, 568, 586, 630, 683, 689, 806, 847, 870, 881, 899, 947, 971, 1068, 1088, 1118, 1172, 1195, 1223, 1258, 1458, 1488, 1551, 1664, 2317, 2825, 3539, 4391, 5446, 6155, 6794, 13218, 14265, 14303, 14916, 15884, 18129, 18662, 19131, 19168, 19729, 20075, 23904, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -6662, , -5901, , , -4752, -4383, , , , -4112, , -3919, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -3730, -3443, , , , , , , , , , , , , , , , -3404, , , , , , , , , , -3350, , , , , -3260, , , , , , -3174, -3110, -2988, , -2988
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -6662, , , , -5746, , , , -5042, , , , , , , , -4407, , , , -4370, -4356, , -4349, -3846, , , , , , , , , , -3097, -2948, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , -2584, , , , , , , , , , , , , , , , , , , -2584
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , -6247, , , , , -5215, , , -4206, -4194, -3588, , , , -3456, , , -3083, , , -2979, , , , , , , , -2937, , , , , , , , , , , , , , , , , , , -2885, , , -2876, , , , -2843, -2746, , , , , , , , , , , , , , -2683, , , , -2591, , , , , , , , -2591
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7954, , , , , , -6907, , , , , , , , , -6819, , , -6615, , , , -6096, , , , , , , , , , , , , -5893, -4259, , , , , , , , , , -4106, , , , , , , , -3876, -3729, , , , , , , -3628, , , , , , , -3564, , , -3173, , -3064, , -3059, -3005, , -2795, , -2739, , , , , , , , -2490, -2490
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -6503, -5881, , , , , , , , , -5611, , , , , , , , , , , -5065, , , , , , , , , , -4963, , -4892, -4791, , , , , , , -4441, -4298, -4267, , , , , , , -4052, -3907, -3849, -3847, , , , , , , , , , , , , , , -3761, , -2937, , , -2647, , , , , , , , , , , -2372, -2370, , , , , -2370
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -7026, -6502, -6186, , , -5497, , , , , , , , , , , -5440, , , , -5347, , , , , , , , , , -5283, , -5125, , , , , , , , -4809, , , , -4568, -4237, , -4004, , , , , , , , , , -3993, -3459, , -3406, -3173, , , , , -2806, -2670, , , , , , , , , , , , , , , , -2461, , , , , , , -2461
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
  chart_bestScoreProblemStatisticChart1_45e27.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_45e27.resize();
});
