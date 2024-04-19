
var chart_scoreCalculationSpeedSummaryChart_5cb06 = new Chart(document.getElementById('chart_scoreCalculationSpeedSummaryChart_5cb06'), {
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
                    421405, 423035, 412843, 342583, 312266, 278479, 274583
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                    borderWidth: 4
,
                  data: [
                    424195, 424384, 410507, 341326, 312806, 283744, 273181
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                    borderWidth: 1
                  ,
                  data: [
                    421769, 425528, 406929, 339214, 309807, 285296, 274458
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                    borderWidth: 1
                  ,
                  data: [
                    418911, 419745, 410184, 341001, 311912, 283452, 267735
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                    borderWidth: 1
                  ,
                  data: [
                    423327, 429925, 402873, 338157, 310401, 281862, 276487
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                    borderWidth: 1
                  ,
                  data: [
                    423597, 425503, 408276, 337608, 313771, 284177, 277032
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
  chart_scoreCalculationSpeedSummaryChart_5cb06.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_scoreCalculationSpeedSummaryChart_5cb06.resize();
});
