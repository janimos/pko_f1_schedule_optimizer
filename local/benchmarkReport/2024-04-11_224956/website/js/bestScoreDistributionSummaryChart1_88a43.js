
var chart_bestScoreDistributionSummaryChart1_88a43 = new Chart(document.getElementById('chart_bestScoreDistributionSummaryChart1_88a43'), {
    type: 'boxplot',
    data: {
        labels: [
            'problem_2023_full'
        ],
        datasets: [
                {
                    label: 'Tabu 5 500',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -2619,
                                    max: -2619,
                                    q1: -2619,
                                    q3: -2619,
                                    median: -2619,
                                    mean: -2619,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'Tabu 10 1000 (favorite)',
                        borderWidth: 4
,
                    data: [
                                {
                                    min: -2396,
                                    max: -2396,
                                    q1: -2396,
                                    q3: -2396,
                                    median: -2396,
                                    mean: -2396,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }, 
                {
                    label: 'LAHC 400',
                        borderWidth: 1
                    ,
                    data: [
                                {
                                    min: -3325,
                                    max: -3325,
                                    q1: -3325,
                                    q3: -3325,
                                    median: -3325,
                                    mean: -3325,
                                    items: [],
                                    outliers: [],
                                }
                            
                    ]
                }
        ]
    },
    options: {
        animation: false,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Best soft score distribution summary (higher is better)'
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
  chart_bestScoreDistributionSummaryChart1_88a43.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_bestScoreDistributionSummaryChart1_88a43.resize();
});