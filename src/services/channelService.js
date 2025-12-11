import api from './api';

export const channelService = {
  getProjectChannels(projectId) {
    return api.get(`/api/projects/${projectId}/channels`);
  },

  createChannel(projectId, data) {
    // data: { type, credentials }
    return api.post(`/api/projects/${projectId}/channels`, data);
  },

  updateChannel(channelId, data) {
    // data: { credentials }
    return api.put(`/api/channels/${channelId}`, data);
  },

  deleteChannel(channelId) {
    return api.delete(`/api/channels/${channelId}`);
  }
};
