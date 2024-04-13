function getScorePopoverContent(constraint_list) {
    var popover_content = "";
    constraint_list.forEach((constraint) => {
        if (getHardScore(constraint.score) === 0) {
            popover_content = popover_content + constraint.name + " : " + constraint.score + "<br>";
        } else {
            popover_content = popover_content + "<b>" + constraint.name + " : " + constraint.score + "</b><br>";
        }
    })
    return popover_content;
}

function getEntityPopoverContent(entityId, indictmentMap) {
    var popover_content = "";
    const indictment = indictmentMap[entityId];
    if (indictment != null) {
        popover_content = popover_content + "Total score: <b>" + indictment.score + "</b> (" + indictment.matchCount + ")<br>";
        indictment.constraintMatches.forEach((match) => {
            if (getHardScore(match.score) === 0) {
                popover_content = popover_content + match.constraintName + " : " + match.score + "<br>";
            } else {
                popover_content = popover_content + "<b>" + match.constraintName + " : " + match.score + "</b><br>";
            }
        })
    }
    return popover_content;
}

function getHardScore(score) {
    return score.slice(0,score.indexOf("hard"))
}

function getSoftScore(score) {
    return score.slice(score.indexOf("hard/"),score.indexOf("soft"))
}

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const solutionId = urlParams.get('id');

    $.getJSON("/schedules/score?id=" + solutionId, function(analysis) {
        var badge = "badge bg-danger";
        if (getHardScore(analysis.score) === 0) { badge = "badge bg-success"; }
        $("#score_a").attr({"title":"Score Brakedown","data-bs-content":"" + getScorePopoverContent(analysis.constraints) + "","data-bs-html":"true"});
        $("#score_text").text(analysis.score);
        $("#score_text").attr({"class":badge});
    });

    $.getJSON("/schedules/solution?id=" + solutionId, function(solution) {
        $.getJSON("/schedules/indictments?id=" + solutionId, function(indictments) {
            renderSchedule(solution, indictments);
            $(function () {
                $('[data-toggle="popover"]').popover()
            })
        })
    });

});

function renderSchedule(solution, indictments) {
    var indictmentMap = {};
    indictments.forEach((indictment) => {
        indictmentMap[indictment.indictedObjectID] = indictment;
    })

    const schedule_div = $("#schedule_container");
    solution.stageList.forEach((stage) => {

        var v_badge = "badge bg-danger";
        if (indictmentMap[stage.name] == null ||
            getHardScore(indictmentMap[stage.name].score) === 0) {
            v_badge = "badge bg-success";
        }

        schedule_div.append(
            $('<a data-toggle="popover" data-bs-html="true" data-bs-content="' +
                'weekNumber=' + stage.weekNumber + '<hr>' +
                getEntityPopoverContent(stage.name, indictmentMap) +
                '" data-bs-original-title="' + stage.name +
                '"><span class="'+ v_badge +'">' +
                vstage.name + '</span></a>'
            )
        )
        schedule_div.append($('<br>'));
    })
}