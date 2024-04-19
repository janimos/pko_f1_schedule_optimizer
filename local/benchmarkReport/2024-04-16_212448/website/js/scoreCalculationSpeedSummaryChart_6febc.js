
var chart_scoreCalculationSpeedSummaryChart_6febc = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_6febc'), {
    type: 'line',
    data: {
        labels: [
            3494850, 5000000, 9612360, 17622660, 24030900, 32041200, 35245320
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                    borderWidth: 1
                  ,
                  data: [
                    388637, 368565, 327574, 214744, 161609, 115734, 109083
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                    borderWidth: 1
                  ,
                  data: [
                    374840, 356122, 326263, 215389, 163378, 121190, 108977
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                    borderWidth: 4
,
                  data: [
                    372800, 353358, 315622, 213434, 163121, 122854, 111270
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
  chart_scoreCalculationSpeedSummaryChart_6febc.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_6febc.resize();
});
