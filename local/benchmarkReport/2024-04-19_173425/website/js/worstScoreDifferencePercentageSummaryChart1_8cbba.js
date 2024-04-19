
var chart_worstScoreDifferencePercentageSummaryChart1_8cbba = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_8cbba'), {
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
                    18.437025796661608, 8.22746521476104, 5.597512216792536, 4.040404040404041, 0, 8.453237410071942, 5.555555555555555
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    20.561456752655538, 8.52994555353902, 6.70812972012439, 3.1986531986531985, 3.62405416168857, 8.453237410071942, 2.867383512544803
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    19.575113808801213, 8.892921960072595, 6.3083074189249215, 2.861952861952862, 3.185981680605336, 3.0575539568345325, 3.584229390681003
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    6.29742033383915, 0, 0, 0, 0.23894862604540024, 0, 0.17921146953405018
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 2.4198427102238353, 2.3989338071968014, 0.33670033670033667, 0.7566706491437674, 4.316546762589928, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    10.62215477996965, 4.71869328493648, 1.6437139049311416, 1.1784511784511784, 0.11947431302270012, 7.374100719424461, 1.2544802867383513
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
                text: 'Worst soft score difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst soft score difference percentage'
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
  chart_worstScoreDifferencePercentageSummaryChart1_8cbba.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_8cbba.resize();
});