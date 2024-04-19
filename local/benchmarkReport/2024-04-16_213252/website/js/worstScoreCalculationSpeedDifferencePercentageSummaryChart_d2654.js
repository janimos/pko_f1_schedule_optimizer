
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d2654 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d2654'), {
    type: 'bar',
    data: {
        labels: [
            'problem_2023_10', 'problem_2023_15', 'problem_2023_20', 'problem_2023_6', 'problem_2023_full', 'problem_5_10', 'problem_5_5'
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2092815149095038, 0, 0.2376738305941846, 0.4194009188979531, 0, 1.161206748824416, 5.625731680399207
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 2.4801529813988523, 0, 0, 3.11804008908686, 1.5387877326842814, 1.4391926439402194
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.2169792258027269, 2.8535924230425014, 0.7619047619047619, 0.47805397973631353, 1.7284373631812386, 0, 3.841758659324018
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.1000317530574346, 2.7396290072305605, 1.0442477876106195, 1.4300625317309905, 3.7919022328821885, 2.124038257667072, 1.4123701834823936
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2.9131024661541276, 3.113712309980491, 1.7842393594605983, 2.3883778644609754, 3.096149087240401, 3.766225090546824, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.221010901883053, 2.0442590124458353, 2.1264222503160557, 0.3361514131918933, 4.578074733976738, 3.626810573429336, 1.1581156103925858
                  ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 100,
        spanGaps: true,
        plugins: {
            title: {
                display: true,
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 0.1
                        
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d2654.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_d2654.resize();
});