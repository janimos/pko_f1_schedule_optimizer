
var chart_scoreCalculationSpeedSummaryChart_8e0ad = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_8e0ad'), {
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
                    378044, 348295, 318449, 208289, 155313, 118932, 105066
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                    borderWidth: 1
                  ,
                  data: [
                    363060, 349595, 317119, 207854, 159165, 118650, 108342
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                    borderWidth: 1
                  ,
                  data: [
                    371659, 344297, 318635, 208305, 159745, 119554, 106882
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                    borderWidth: 1
                  ,
                  data: [
                    362964, 351610, 321654, 212219, 159568, 119889, 109050
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                    borderWidth: 4
,
                  data: [
                    357909, 357264, 324693, 213909, 160149, 120767, 108319
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                    borderWidth: 1
                  ,
                  data: [
                    362054, 356784, 318185, 214549, 158488, 121173, 109876
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
                text: 'Score calculation speed summary (higher is better)'
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
                    text: 'Score calculation speed per second'
                },
                ticks: {
                        stepSize: 10000
                        
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
  chart_scoreCalculationSpeedSummaryChart_8e0ad.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_8e0ad.resize();
});
