import api from './api';

const appointmentService = {
    getAll: async (projectId) => {
        return await api.get(`/projects/${projectId}/appointments`);
    },
    updateStatus: async (appointmentId, status) => {
        return await api.put(`/appointments/${appointmentId}/status`, { status });
    }
};

export default appointmentService;
