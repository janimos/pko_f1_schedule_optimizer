
var chart_bestScoreProblemStatisticChart1_e7aa5 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_e7aa5'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 17, 21, 30, 31, 33, 37, 38, 41, 45, 48, 51, 52, 54, 55, 69, 74, 90, 95, 104, 105, 152, 200, 212, 235, 275, 360, 417, 553, 607, 988, 1207, 1857, 2291, 2301, 4013, 4025, 5000
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -518, -285, 96, 230, 991, , , 1136, 1205, , 1234, , 1616, , 1772, , , 1935, , , 2008, , 2101, 2148, , 2169, 2272, , , , , 2369, , 2406, 2416, , 2456, 2470, 2504, 2572, , , 2709, , , , , , , 2709
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1119, 1551, 1624, , , , , , , 1735, , 1863, , 2104, , , 2132, 2177, , , , 2265, , , 2267, , , 2273, 2327, 2433, , , 2442, 2573, , , , , , , , 2581, , 2586, , 2609, 2690, , , 2690
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    1718, 1941, , , , 2036, 2169, , , , , , , , , 2216, , 2222, 2287, 2411, , , , , , , , , , , 2444, , , , , 2527, , , , , 2613, , , , 2618, , , 2627, 2654, 2654
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
                text: 'problem_2023_10 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_e7aa5.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_e7aa5.resize();
});
