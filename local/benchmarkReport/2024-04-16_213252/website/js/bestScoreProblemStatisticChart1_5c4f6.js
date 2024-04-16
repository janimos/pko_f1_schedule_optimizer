
var chart_bestScoreProblemStatisticChart1_5c4f6 = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_5c4f6'), {
    type: 'line',
    data: {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, 23, 24, 26, 31, 32, 35, 38, 39, 41, 45, 46, 48, 49, 51, 52, 63, 68, 72, 75, 86, 95, 99, 101, 102, 111, 150, 151, 152, 158, 165, 201, 232, 235, 264, 277, 333, 356, 392, 399, 465, 503, 667, 948, 1271, 1379, 1390, 1422, 1606, 1790, 1821, 2136, 2272, 2284, 2392, 2402, 2468, 4057, 4069, 4239, 5209, 6895, 8037, 13687, 16897, 20103, 21805, 23407, 25098, 25344, 26021, 29595, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , 813, 1285, 1740, 1842, 1855, , 1940, 2031, 2259, , 2444, , , , , , , , , , , , , , , , , , 2605, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2617, , , , , , , , 2625, , , , , , , 2642, , , 2652, 2664, , 2670, , 2712, 2763, , , , , , , 2763
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , 912, , , 1345, , , , 1768, , , 1926, , 2133, , , 2140, , , , , , 2187, , , , , , , , , 2194, , 2218, 2270, , , 2322, , , 2324, 2327, , , , , , , 2370, , 2402, , 2586, , , , , , , , , , , , 2651, , , , , , , , , , , , , , , 2710, , , 2711, , , , , , 2711
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , 942, , , , , , , 1333, , , , , , 1734, , , 1984, , , , 2159, , , , 2289, , , , , , , , , , , , , , , 2319, , 2402, , , , , , , , 2417, , , , , , , 2484, 2565, 2580, , , , 2625, 2633, 2697, , , , , , , , 2714, , , , , , , , , 2718, , 2718
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    -518, -147, 230, 417, 991, , , 1043, 1136, , 1205, , 1234, 1616, , , , 1772, , , , , , 1935, , , , 2008, , 2101, , 2148, , 2169, 2272, , , , , , , , 2369, , , , 2406, , , , 2416, , 2456, , 2470, , 2504, , 2572, , , , 2709, , , , , , , , , , , , , , , , , , , , , , , , 2761, , , , , 2761
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    1551, 1624, , , , , 1735, 1863, , , 2104, , , , , , , , , , 2132, , 2177, , , , 2265, , , , 2267, , , , , 2273, 2327, , , 2433, , 2442, , , , 2573, , , , , , , , , , , , , , , , 2581, , 2586, , , , , , , , , , 2609, 2690, , , , , , , , , , , , , 2693, 2705, , 2730, 2730
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    1432, 1941, , 2036, 2169, , , , , , , , , , , , , , 2216, , , 2222, 2411, , , , , , , , , , , , , , , , 2444, , , , , , , , , , 2527, , , , , , , , , , , 2613, , , , , , , , , , 2618, , , , , , , 2627, 2654, , , , , , , , , , , , , , 2658
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
                text: 'problem_2023_10 best soft score statistic'
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
  chart_bestScoreProblemStatisticChart1_5c4f6.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_5c4f6.resize();
});
