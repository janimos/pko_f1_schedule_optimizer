
var chart_bestScoreSummaryChart1_e3b8b = new Chart(document.getElementById('chart_bestScoreSummaryChart1_e3b8b'), {
    type: 'bar',
    data: {
        labels: [
            'problem_2023_10', 'problem_2023_15', 'problem_2023_20', 'problem_2023_6', 'problem_2023_full', 'problem_5_10', 'problem_5_5'
        ],
        datasets: [
            {
                  label: 'Late Acceptance Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2709, 1748, -1640, 1200, -3325, 1271, 1272
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2690, 1687, -834, 1198, -3175, 1275, 1265
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2654, 1823, -492, 1200, -2670, 1276, 1274
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
  chart_bestScoreSummaryChart1_e3b8b.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreSummaryChart1_e3b8b.resize();
});