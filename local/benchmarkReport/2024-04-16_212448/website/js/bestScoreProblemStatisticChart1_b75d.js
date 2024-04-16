
var chart_bestScoreProblemStatisticChart1_b75d = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_b75d'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 7, 14, 19, 20, 24, 26, 32, 33, 47, 61, 64, 80, 111, 122, 123, 129, 163, 220, 221, 226, 227, 230, 263, 278, 394, 436, 439, 469, 517, 579, 666, 723, 758, 895, 946, 1055, 1271, 1298, 1300, 1570, 1634, 1646, 1847, 1864, 1903, 2227, 2955, 3461, 3479, 4011, 4021, 4371, 4378, 5000
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -6484, , , , , -6453, , -6329, -4951, , -3770, , -3720, -3572, -3077, , , , -2163, -2041, , , , , , , , , , , , , , , , , -1772, , , , , , , , -1744, , , , , , , , , , -1723, -1640, -1640
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -5115, -4946, -3794, -3509, , , , , , -3469, , -3303, , , , -2970, -2965, -2919, , , -2798, -2480, -2478, , -2467, , -2387, -2270, , , , , , -2129, , -2086, , , -2045, , -1830, -1682, , , , -1626, -1622, -1599, -1365, , , -1234, -965, -834, , , -834
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -4421, -3337, , , -3039, , -2804, , , , , , , , , , , , , , , , , -2569, , -2514, , , -2464, -2360, -1978, -1724, -1669, , -1589, , , -1501, , -1463, , , -1435, -1192, , , , , , -767, -492, , , , , , -492
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
  chart_bestScoreProblemStatisticChart1_b75d.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_b75d.resize();
});
