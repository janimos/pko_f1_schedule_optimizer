$(document).ready(
    function () {
        $.getJSON("/schedules/list", function (schedules) {
            var listOfSchedules = $("#listofschedules");
            $.each(schedules, function (idx, value) {
                listOfSchedules.append(
                    $('<li><a href=' + value.solutionId + '"schedule.html?id=">' + value.score + '</a>')
                )
            })
        })
    }
)