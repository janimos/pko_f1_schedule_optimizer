
var chart_bestScoreProblemStatisticChart1_a40fa = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_a40fa'), {
    type: 'line',
    data: {
        labels: [
            2, 3, 4, 6, 9, 14, 15, 24, 30, 32, 40, 41, 45, 47, 62, 68, 74, 75, 82, 85, 87, 93, 96, 101, 112, 125, 146, 154, 158, 164, 183, 184, 247, 278, 309, 319, 330, 447, 449, 502, 513, 670, 699, 714, 749, 752, 896, 957, 1020, 1528, 1849, 2384, 4097, 4646, 4729, 6671, 6865, 6868, 7389, 7595, 7978, 9180, 10000
        ],
        datasets: [
            {
                  label: 'Tabu 5 500',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , 912, , , 1345, , , 1740, , , 1922, , 1958, 2066, , 2086, 2181, , , , , , 2373, , , , 2418, 2467, , 2481, 2490, , 2619, , , , , , 2657, , , , , , , , , , , , 2661, 2661
                  ]
                }, 
{
                  label: 'Tabu 10 1000 (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , , , , 912, 1290, , 1772, 1989, , , 2138, 2152, , , 2238, , , 2338, , , , , , , , , , , , 2413, , 2464, , , , , , , , , , , 2517, 2591, 2602, , , , , , 2679, 2709, , , , , , 2727, , 2727
                  ]
                }, 
{
                  label: 'LAHC 400',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -66, 230, 719, 838, 1106, 1717, , , 1984, , , 2086, , , , , 2109, , , 2120, , , 2153, , , 2177, , , 2198, 2210, 2228, 2356, , , , 2403, 2428, , , 2432, , , 2472, , 2511, , , , 2532, , 2551, 2554, 2566, , , 2609, 2625, 2627, 2628, 2664, , , 2664
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
  chart_bestScoreProblemStatisticChart1_a40fa.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_a40fa.resize();
});
