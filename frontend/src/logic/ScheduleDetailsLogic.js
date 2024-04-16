import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from "axios";

export const useScheduleDetails = () => {
    const route = useRoute();
    const solutionId = route.params.solutionId;
    const scoreText = ref('');
    const scoreBadge = ref('');
    const stages = ref([]);
    const indictmentMap = ref({});

    const getHardScore = score => score.slice(0, score.indexOf("hard"));

    /*const getScorePopoverContent = constraintList => {
      let popoverContent = "";
      constraintList.forEach(constraint => {
        popoverContent += getHardScore(constraint.score) === 0 ?
            `${constraint.name} : ${constraint.score}<br>` :
            `<b>${constraint.name} : ${constraint.score}</b><br>`;
      });
      return popoverContent;
    };*/

    const getEntityPopoverContent = entityId => {
        const indictment = indictmentMap.value[entityId];
        if (!indictment) return '';
        let popoverContent = `Total score: <b>${indictment.score}</b> (${indictment.matchCount})<br>`;
        indictment.constraintMatches.forEach(match => {
            popoverContent += getHardScore(match.score) === 0 ?
                `${match.constraintName} : ${match.score}<br>` :
                `<b>${match.constraintName} : ${match.score}</b><br>`;
        });
        return popoverContent;
    };

    const stageDisplay = stage => {
        return `<span class="${indictmentMap.value[stage.name] == null || getHardScore(indictmentMap.value[stage.name].score) === 0 ? 'badge bg-success' : 'badge bg-danger'}">${stage.name}</span>`;
    };

    onMounted(() => {
        axios.get(`/schedules/score?id=${solutionId}`).then(response => {
            const analysis = response.data;
            scoreText.value = analysis.score;
            scoreBadge.value = getHardScore(analysis.score) === 0 ? 'badge bg-success' : 'badge bg-danger';
        });

        axios.get(`/schedules/solution?id=${solutionId}`).then(response => {
            const solution = response.data;
            stages.value = solution.stageList;

            axios.get(`/schedules/indictments?id=${solutionId}`).then(response => {
                const indictments = response.data;
                indictments.forEach(indictment => {
                    indictmentMap.value[indictment.indictedObjectID] = indictment;
                });
            });
        });
    });

    return {solutionId, scoreText, scoreBadge, stages, getEntityPopoverContent, stageDisplay};
};