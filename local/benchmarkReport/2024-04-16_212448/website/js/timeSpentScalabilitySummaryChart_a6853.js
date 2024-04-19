
var chart_timeSpentScalabilitySummaryChart_a6853 = new Chart(document.getElementById('chart_timeSpentScalabilitySummaryChart_a6853'), {
    type: 'line',
    data: {
        labels: [
            3494850, 35245320
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                    borderWidth: 1
                  ,
                  data: [
                    5000, 5000
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                    borderWidth: 1
                  ,
                  data: [
                    5000, 5000
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                    borderWidth: 4
,
                  data: [
                    5000, 5000
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
                text: 'Time spent scalability summary (lower is better)'
            },
            tooltip: {
                callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            return label + ": " + humanizeTime(context.parsed.y);
                        }
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
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index, ticks) {
                            return humanizeTime(value);
                        }
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
  chart_timeSpentScalabilitySummaryChart_a6853.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_timeSpentScalabilitySummaryChart_a6853.resize();
});