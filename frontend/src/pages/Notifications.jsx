import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('/api/notifications')
      .then(res => res.json())
      .then(data => setNotifications(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Public Notifications</h1>
      <ul className="space-y-2">
        {notifications.map((n, i) => (
          <li key={i} className="border p-2 rounded">{n.public_notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
