// Notification system for booking status updates
function createNotification(userId, message, type = 'info') {
    const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    const notification = {
        id: Date.now(),
        userId: userId,
        message: message,
        type: type, // 'success', 'error', 'info'
        read: false,
        timestamp: new Date().toISOString()
    };
    
    notifications.push(notification);
    localStorage.setItem('notifications', JSON.stringify(notifications));
}

function getNotifications(userId) {
    const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    return notifications.filter(n => n.userId === userId).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

function markNotificationAsRead(notificationId) {
    const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    const notificationIndex = notifications.findIndex(n => n.id === notificationId);
    
    if (notificationIndex !== -1) {
        notifications[notificationIndex].read = true;
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }
}

function getUnreadCount(userId) {
    const notifications = getNotifications(userId);
    return notifications.filter(n => !n.read).length;
}