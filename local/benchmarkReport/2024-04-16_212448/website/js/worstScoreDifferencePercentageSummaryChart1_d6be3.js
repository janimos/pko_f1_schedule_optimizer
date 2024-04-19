
var chart_worstScoreDifferencePercentageSummaryChart1_d6be3 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_d6be3'), {
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
                    2.0723436322532027, 3.615886188500297, 0, 0.1669449081803005, 0, 0, 0.5533596837944664
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.3564431047475507, 0, 49.146341463414636, 0, 4.511278195488721, 0.3147128245476003, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Large (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    0, 8.061647895672792, 70, 0.1669449081803005, 19.69924812030075, 0.3933910306845004, 0.7114624505928854
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
  chart_worstScoreDifferencePercentageSummaryChart1_d6be3.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_d6be3.resize();
});