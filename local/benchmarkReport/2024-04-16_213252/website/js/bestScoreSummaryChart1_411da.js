
var chart_bestScoreSummaryChart1_411da = new Chart(document.getElementById('chart_bestScoreSummaryChart1_411da'), {
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
                    2763, 1691, -1073, 1227, -2988, 1281, 1279
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2711, 1806, -796, 1222, -2584, 1275, 1274
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2718, 1856, -649, 1222, -2591, 1278, 1275
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2761, 2000, -861, 1200, -2490, 1271, 1272
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2730, 2046, -756, 1198, -2370, 1276, 1265
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2658, 1890, -492, 1202, -2461, 1276, 1274
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
                text: 'Best soft score summary (higher is better)'
            }
        },
        scales: {
            x: {
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
  chart_bestScoreSummaryChart1_411da.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_411da.resize();
});