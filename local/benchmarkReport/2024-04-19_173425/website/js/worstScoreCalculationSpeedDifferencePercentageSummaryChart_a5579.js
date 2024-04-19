
var chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a5579 = new Chart(document.getElementById('chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a5579'), {
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
                    1.4736025212672685, 0.7937199611370951, 0, 2.47472528563592, 2.557753002035595, 0.7838092175011019, 0.5953531895796482
                  ]
                }, 
{
                  label: 'Tabu Search Medium (favorite)',
                  grouped: true,
                    borderWidth: 4
,
                  data: [
                    1.1012772209189357, 0.9680220266165709, 1.8906273004427623, 1.894889952913201, 2.0341008833361345, 1.1051948206649276, 1.261365779366023
                  ]
                }, 
{
                  label: 'Tabu Search Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.47569962797090115, 0, 2.4479404192057572, 1.0067688825014334, 2.5110650456608217, 1.377741247662271, 0.6822451546987307
                  ]
                }, 
{
                  label: 'Late Acceptance Small',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    1.0050117295798677, 0.6794552737672164, 1.785771997170343, 1.8147158037396403, 0, 0, 0
                  ]
                }, 
{
                  label: 'Late Acceptance Medium',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0.16261462998507145, 0.19173227202742352, 1.2148133252417597, 0, 3.268903953536146, 2.425282016462376, 1.0541618625435951
                  ]
                }, 
{
                  label: 'Late Acceptance Large',
                  grouped: true,
                    borderWidth: 1
                  ,
                  data: [
                    0, 1.2795062732604492, 2.0461147878296027, 1.3411174241013917, 3.4724634433301587, 1.3717852505687977, 1.1186146938132444
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
                text: 'Worst score calculation speed difference percentage summary (higher is better)'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                title: {
                    display: true,
                    text: 'Worst score calculation speed difference percentage'
                },
                ticks: {
                        stepSize: 0.1
                        
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
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a5579.resize(1280, 720);
});
window.addEventListener('afterprint', () => {
  chart_worstScoreCalculationSpeedDifferencePercentageSummaryChart_a5579.resize();
});