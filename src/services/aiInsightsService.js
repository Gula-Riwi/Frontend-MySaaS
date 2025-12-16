import api from './api';

const aiInsightsService = {
    getProjectInsights(projectId, period = 'month') {
        return api.get(`/api/projects/${projectId}/ai-insights`, { params: { period } });
    },

    getReactivationCandidates(projectId) {
        return api.get(`/api/dashboard/${projectId}/reactivation-candidates`);
    },

    sendSmartAlertsReport(projectId) {
        return api.post(`/api/ai-insights/${projectId}/send-report`);
    }
};

export default aiInsightsService;
