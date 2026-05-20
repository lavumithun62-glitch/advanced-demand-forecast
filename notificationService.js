```javascript
import apiClient from './api';

const notificationService = {
  // Get notifications
  getNotifications: async (page = 1, limit = 20, read = 'all') => {
    return apiClient.get('/notification', {
      params: { page, limit, read }
    });
  },

  // Mark as read
  markAsRead: async (notificationId) => {
    return apiClient.put(`/notification/${notificationId}/read`);
  },

  // Mark all as read
  markAllAsRead: async () => {
    return apiClient.put('/notification/read-all');
  },

  // Delete notification
  deleteNotification: async (notificationId) => {
    return apiClient.delete(`/notification/${notificationId}`);
  }
};

export default notificationService;
```
