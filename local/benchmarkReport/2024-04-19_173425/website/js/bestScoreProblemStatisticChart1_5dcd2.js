
var chart_bestScoreProblemStatisticChart1_5dcd2 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_5dcd2'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 14, 18, 19, 20, 21, 24, 29, 42, 44, 63, 66, 87, 99, 101, 119, 137, 138, 169, 175, 191, 196, 197, 218, 246, 269, 272, 337, 375, 381, 456, 477, 536, 626, 675, 682, 751, 772, 805, 816, 909, 941, 1081, 1316, 1470, 1478, 1487, 1577, 1591, 1607, 1625, 1733, 1741, 1742, 2496, 2617, 2713, 3732, 4911, 4971, 6714, 10736, 16414, 16425, 21408, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 1895, 2242, , , 2278, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2279, 2317, , , , , , , , , , , , , , , , , , , , 2322, , , 2333, , , 2341, , , 2377, 2377
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    , , 1999, , , 2311, , , 2321, , , , , , , , , , , , , 2330, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2334, , 2340, 2352, , , , , , , , , , , , , , , 2371, 2402, , 2402
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , 2052, , , 2241, , 2263, , , , , , , , , , , , , , , , , 2265, , , 2281, , , , , , , , , , , 2298, , , 2310, , , , 2326, 2333, , 2342, , , , , 2348, 2393, , , , , , , , , , , , , , , , 2393
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1883, 1349, , , 1309, , , 1361, , , 1485, , , , , 1632, 1768, 1808, 1854, 1879, 1931, , , , 1942, , , 1956, , 1978, 2005, , 2022, 2066, , 2106, 2126, , 2179, , , 2180, , , , , 2209, , 2251, , , , , , , , , , , , , , , , , , , , , , , , , , 2251
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1255, 1698, , 1915, , , , , , , , , 1997, 2035, 2085, , , , , , , , , , , , , , , , , , , , , , , , , 2127, , , , , , , , 2130, , , , , , , , , , , , 2139, 2158, 2183, 2219, 2233, , , 2251, , 2305, , , , , , 2305
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1648, 1918, , , , 1939, , , , , , , , , , , , , , , , , 1994, 2088, , 2095, 2119, , , , , , , , 2133, , , 2151, , , 2169, , , , , , , , , , , 2189, , , 2220, , , , , , , , , , , 2276, , , , 2278, , , , , 2288
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
                text: 'problem_2023_20 best soft score statistic'
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
                suggestedMax: 30000,
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
  chart_bestScoreProblemStatisticChart1_5dcd2.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_5dcd2.resize();
});
