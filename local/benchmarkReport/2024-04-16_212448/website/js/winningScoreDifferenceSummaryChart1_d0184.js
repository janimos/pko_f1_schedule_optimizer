
var chart_winningScoreDifferenceSummaryChart1_d0184 = new Chart(document.getElementById('chart_winningScoreDifferenceSummaryChart1_d0184'), {
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
                    0, -7500, -114800, 0, -65500, -500, -200
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    -1900, -13600, -34200, -200, -50500, -100, -900
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    -5500, 0, 0, 0, 0, 0, 0
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
                text: 'Winning soft score difference summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Winning soft score difference'
                },
                ticks: {
                        stepSize: 1000
                        
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
  chart_winningScoreDifferenceSummaryChart1_d0184.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_winningScoreDifferenceSummaryChart1_d0184.resize();
});