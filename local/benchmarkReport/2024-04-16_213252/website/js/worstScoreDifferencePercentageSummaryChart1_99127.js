
var chart_worstScoreDifferencePercentageSummaryChart1_99127 = new Chart(document.getElementById('chart_worstScoreDifferencePercentageSummaryChart1_99127'), {
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
                    3.9503386004514676, 0, 0, 2.4207011686143574, 0, 0.7867820613690008, 1.1067193675889329
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.9939804364183598, 6.800709639266706, 25.815470643056848, 2.003338898163606, 13.520749665327978, 0.3147128245476003, 0.7114624505928854
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    2.2573363431151243, 9.757539917208751, 39.51537744641193, 2.003338898163606, 13.28647925033467, 0.5507474429583006, 0.7905138339920948
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    3.875094055680963, 18.273211117681846, 19.757688723205966, 0.1669449081803005, 16.666666666666664, 0, 0.5533596837944664
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    2.708803611738149, 20.993494973388525, 29.54333643988816, 0, 20.682730923694777, 0.3933910306845004, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 11.768184506209343, 54.14725069897484, 0.333889816360601, 17.637215528781795, 0.3933910306845004, 0.7114624505928854
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
  chart_worstScoreDifferencePercentageSummaryChart1_99127.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreDifferencePercentageSummaryChart1_99127.resize();
});