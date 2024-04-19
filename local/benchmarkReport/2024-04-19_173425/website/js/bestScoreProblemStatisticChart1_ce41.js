
var chart_bestScoreProblemStatisticChart1_ce41 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_ce41'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 7, 8, 10, 15, 17, 19, 20, 24, 32, 35, 37, 49, 53, 61, 81, 96, 97, 162, 163, 202, 207, 208, 278, 736, 1177, 1245, 1820, 4254, 4915, 6971, 7507, 9919, 14774, 15464, 16633, 17735, 23444, 28848, 30000, 30001
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 1563, 1589, 1649, 1680, , 1721, 1730, , 1735, , , , , , , , , , , , , , , , , , , 1762, , 1774, 1782, , , , , , , 1789, , , , , 1789, 
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , , 1563, , 1623, , 1712, , , 1746, , , , , , , 1771, , , , , , , , , , , , , , , , , , 1777, 1781, , , , , , 1794, 1794, 
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , 1666, , 1712, , , 1714, , , 1745, , , , 1758, , , , , , , , , 1768, , , , , 1772, 1778, 1780, , , 1791, , , 1800, , , 1800, 
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1343, , , 1430, , , , , , , 1463, , , 1483, , 1552, , , , , 1557, 1566, 1569, 1586, 1604, 1640, 1653, , , , , , , , , , , , , , , , , 1653, 
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 1626, , , , , , , , , , , , , , 1640, 1692, , , , , , , , , , , , , , , , , , , , , , , 1693, , , , , 1693
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1610, , , 1614, , , , , , , , , 1653, , , , , , , 1700, , , , , , , , , , 1709, , , , , , , , , , , , 1731, , , 1731
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
                text: 'problem_2023_15 best soft score statistic'
            },
            tooltip: {
                callbacks: {
                        title: function(context) {
                            return humanizeTime(context[0].parsed.x);
                        }
                        
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time spent'
                },
                ticks: {
                        stepSize: 100
                        ,
                        callback: function(value, index) {
                            return humanizeTime(value);
                        }
                },
                suggestedMin: 0,
                suggestedMax: 30001,
                type: 'linear',
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Best soft score'
                },
                ticks: {
                        stepSize: 10
                        
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
  chart_bestScoreProblemStatisticChart1_ce41.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_ce41.resize();
});
