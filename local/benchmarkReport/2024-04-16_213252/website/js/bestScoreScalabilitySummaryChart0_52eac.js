
var chart_bestScoreScalabilitySummaryChart0_52eac = new Chart(document.getElementById('chart_bestScoreScalabilitySummaryChart0_52eac'), {
    type: 'line',
    data: {
        labels: [
            3494850, 35245320
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                    borderWidth: 4
,
                  data: [
                    0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                    borderWidth: 1
                  ,
                  data: [
                    0, 0
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
                text: 'Best hard score scalability summary (higher is better)'
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
                    text: 'Best hard score'
                },
                ticks: {
                        stepSize: 1
                        
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
  chart_bestScoreScalabilitySummaryChart0_52eac.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreScalabilitySummaryChart0_52eac.resize();
});