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
    //const mapRef = ref('map');
    const markers = ref([]);
    const polylines = ref([]);
    //const center = ref([47.41322, -1.219482]);

    const getHardScore = score => score.slice(0, score.indexOf("hard"));

    const getScore = (constraintName, score) => {
        return getHardScore(score) === 0 ?
                `${constraintName} : ${score}` :
                `${constraintName} : ${score}`;
    };

    const setMapStageLocations = () => {
        markers.value = stages.value.map(stage => ({
            latLng: [stage.location.latitude, stage.location.longitude],
            stageName: stage.name
        }));
    };

    // Inside your setMapStageLocations function or after you have all your stages
    const setMapPolylines = () => {
        const polylineLatLngs = markers.value.map(marker => marker.latLng);

        polylines.value = [polylineLatLngs];
    };

    const getCenter = () => {
        return markers.value.length > 0 ? markers.value[0].latLng : [47.41322, -1.219482];
    };
    
    onMounted(() => {
        axios.get(`/api/schedules/score?id=${solutionId}`).then(response => {
            const analysis = response.data;
            scoreText.value = analysis.score;
            scoreBadge.value = getHardScore(analysis.score) === 0 ? 'badge bg-success' : 'badge bg-danger';
        });

        axios.get(`/api/schedules/solution?id=${solutionId}`).then(response => {
            const solution = response.data;
            stages.value = solution.stageList;

            setMapStageLocations();
            setMapPolylines();
            //getCenter();

            axios.get(`/api/schedules/indictments?id=${solutionId}`).then(response => {
                const indictments = response.data;
                indictments.forEach(indictment => {
                    indictmentMap.value[indictment.indictedObjectID] = indictment;
                });
            });
        });

        
    });

    return {solutionId, scoreText, scoreBadge, stages, indictmentMap, markers, polylines, getScore, getCenter};
};