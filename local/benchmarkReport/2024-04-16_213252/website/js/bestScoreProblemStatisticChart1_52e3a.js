
var chart_bestScoreProblemStatisticChart1_52e3a = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_52e3a'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 21, 23, 26, 28, 31, 36, 40, 42, 45, 50, 51, 69, 72, 85, 92, 95, 101, 106, 108, 112, 142, 148, 150, 320, 473, 474, 488, 490, 497, 571, 694, 791, 874, 906, 990, 1941, 2516, 4109, 5979, 9528, 22002, 26268, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , 631, 934, 1019, , 1023, 1051, 1068, 1087, 1124, , 1136, 1183, , , , , 1205, 1209, , , , , , , 1211, , , , , 1217, , , , , , , , , , , , , , , 1227, , , , , , , , , , , , , 1227
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , 631, , , 862, , , 1040, , , 1089, , 1128, 1171, , 1179, 1181, 1182, 1189, , , , , , , , 1202, , 1203, , 1213, , 1222, , , , , , , , , , , , , , , , , , , , , , , 1222
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , 631, , , , 864, , , , , 1068, , 1186, , , , , , , , , , , , , , , , , , , , 1191, , 1207, 1217, , , , , , , , , , 1219, , , , , , 1220, , 1222, 1222
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 775, , 795, 1012, , , , , , 1072, , , , , 1098, , , , , , , , 1142, , 1174, , , , , , , , 1178, , , , , 1182, , , , 1186, , , , , 1190, , , , 1194, , 1195, 1200, , , , , 1200
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    865, 912, 981, , 996, 1148, , , , , , , , , , , , , , 1156, , , , , 1158, , , , 1180, , , , , , , , , , , , , , , , 1183, 1193, , , 1194, 1195, , , 1198, , , , , , , 1198
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    624, 1038, , 1058, , 1114, , , , , , 1126, , , 1141, , , , , , , , , , , , , 1173, , 1174, , , , , 1178, 1194, , , , , , 1199, , 1200, , , , , , , , , , , , 1201, , 1202, , 1202
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
  chart_bestScoreProblemStatisticChart1_52e3a.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_52e3a.resize();
});
