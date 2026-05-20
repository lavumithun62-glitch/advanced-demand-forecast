
```javascript
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  addNotification, 
  markAsRead, 
  setNotifications 
} from '../store/slices/notificationSlice';
import notificationService from '../services/notificationService';

export const useNotification = () => {
  const dispatch = useDispatch();
  const { notifications, unreadCount } = useSelector(state => state.notification);

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await notificationService.getNotifications(1, 20);
      dispatch(setNotifications(response.data));
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  // Mark notification as read
const handleMarkAsRead = async (notificationId) => {
    try {
      await notificationService.markAsRead(notificationId);
      dispatch(markAsRead(notificationId));
    } catch (error) {
      console.error('Failed to mark notification as read:', error);
    }
  };

  return {
    notifications,
    unreadCount,
    fetchNotifications,
    handleMarkAsRead,
    addNotification: (notification) => dispatch(addNotification(notification))
  };
};
