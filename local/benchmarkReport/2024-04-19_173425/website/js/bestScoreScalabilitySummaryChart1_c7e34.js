
var chart_bestScoreScalabilitySummaryChart1_c7e34 = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart1_c7e34'), {
    type: 'line',
    data: {
        labels: [
            3494850, 5000000, 9612360, 17622660, 24030900, 32041200, 35245320
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                    borderWidth: 1
                  ,
                  data: [
                    589, 603, 618, 1561, 1789, 2377, 2511
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                    borderWidth: 4
,
                  data: [
                    574, 603, 613, 1589, 1794, 2402, 2602
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                    borderWidth: 1
                  ,
                  data: [
                    578, 573, 611, 1576, 1800, 2393, 2591
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                    borderWidth: 1
                  ,
                  data: [
                    559, 556, 594, 1401, 1653, 2251, 2517
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                    borderWidth: 1
                  ,
                  data: [
                    558, 580, 596, 1318, 1693, 2305, 2530
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                    borderWidth: 1
                  ,
                  data: [
                    565, 597, 601, 1458, 1731, 2288, 2514
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
                text: 'Best soft score scalability summary (higher is better)'
            },
            tooltip: {
                callbacks: {
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Problem scale'
                },
                ticks: {
                        stepSize: 1000000
                        
                },
                suggestedMin: 0,
                suggestedMax: 35245320,
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
  chart_bestScoreScalabilitySummaryChart1_c7e34.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart1_c7e34.resize();
});
