import { useEffect, useState } from 'react';

interface OnlineStatus {
  status: boolean;
  loading: boolean;
}

enum StatusType {
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState<OnlineStatus>({
    status: true,
    loading: false,
  });

  useEffect(() => {
    window.addEventListener(StatusType.ONLINE, () => {
      setOnlineStatus({
        status: true,
        loading: false,
      });
    });

    window.addEventListener(StatusType.OFFLINE, () => {
      setOnlineStatus({
        status: false,
        loading: false,
      });
    });
  }, []);

  return onlineStatus;
};
