
var chart_bestScoreProblemStatisticChart1_c070c = new Chart(document.getElementById('chart_bestScoreProblemStatisticChart1_c070c'), {
    type: 'line',
    data: {
        labels: [
            0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 23, 24, 27, 28, 30, 31, 32, 35, 37, 38, 39, 40, 43, 44, 46, 47, 52, 58, 59, 68, 81, 86, 93, 97, 99, 101, 103, 117, 127, 133, 137, 147, 159, 201, 246, 258, 259, 262, 263, 300, 306, 308, 314, 343, 346, 348, 366, 374, 396, 403, 408, 446, 467, 524, 538, 553, 557, 693, 714, 719, 837, 880, 907, 1107, 1220, 1302, 1396, 1458, 1913, 1926, 1928, 2423, 2458, 2466, 2481, 2543, 2575, 3483, 5025, 5055, 5649, 6289, 8016, 9634, 11453, 14516, 16529, 18436, 19582, 19586, 21617, 24141, 25412, 28905, 30000
        ],
        datasets: [
            {
                  label: 'Tabu Search Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -1242, -611, , -112, , 118, , , 176, , 362, , 662, 666, , 834, , , , 950, , , , , , , , , , , , , , , , , , 980, , , , , , , , , 1126, , , 1145, , , , , , , , , 1251, 1285, 1410, , , , , , , , , , , , , , , , , , , , , 1620, 1691, , , , , , , , , , , , , , , , , , , , , , , , , , , 1691
                  ]
                }, 
{
                  label: 'Tabu Search Medium',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , -1203, , , , -695, , , , , -314, , , , 123, , , 242, , , 435, , , 629, , , , , , , , 688, 1021, , , , , , , , , , , , , , , , , , , , , , , , 1023, , 1105, , , , 1207, , , , , , , , , , , 1217, 1218, 1574, , , , , , , , , , , 1615, , , , , 1657, , 1757, , , , , , , , , , , , , 1806, , , , 1806
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , , , , , , , , , , , , -1201, , , , , , , , -690, , , , , , -189, , , , , , , 169, , 672, , 935, 936, , , , , , 1048, 1084, , 1095, , , 1190, 1226, , 1232, , , , , , , , , , , , , , , , , , , 1234, , 1308, , , , , , , , , , , , 1313, 1440, , 1601, , 1651, 1765, , , , , , , , 1826, , , , 1856, , , , , , , , 1856
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , , -2252, -1233, , , -1128, -1036, , , -845, , -702, -606, , -530, -381, , , , , , -167, , , , , , -165, -57, 127, , 166, , 472, , , 700, , , , , , , , , , , , , , , , , , , , , 743, , 855, , , , 872, , 1052, , , , , , 1187, , 1446, , , , , , , , , , , , , , , , , , 1479, , , 1626, , 1681, 1748, 1816, , , , 1901, , , 1945, , , , , 2000, , 2000
                  ]
                }, 
{
                  label: 'Late Acceptance Medium (favorite)',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 4
,
                  data: [
                    -594, 201, , , , , 214, , , , , , , , , , , , 437, , , , , , 543, 974, , , , , , , , , , , , , , , , , , , , , , , , 1051, , , , , , , , , , , , , , , , , , , , , , 1209, , , , , , , , 1252, 1314, 1511, 1685, , , , , , , , , 1687, , , , , , , , , , , 1783, , 1812, , , , 1912, , 1959, , 2046, 2046
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                        stepped: true,
                        pointRadius: 0,
                    borderWidth: 1
                  ,
                  data: [
                    , -1135, -650, , , , , , , , -648, 355, , , , , 401, , , , , , , , , , , , , , , 439, , 445, , , , , , , 446, , 534, 597, 957, , , 962, , , , , , , , 993, 1099, 1127, , , , , , , , , , 1173, 1202, 1327, 1335, , , , , , , , , , , , , 1445, 1823, , , , , , , , , , , , , , , , 1863, , , , , , , 1890, , , , , , 1890
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
  chart_bestScoreProblemStatisticChart1_c070c.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreProblemStatisticChart1_c070c.resize();
});
