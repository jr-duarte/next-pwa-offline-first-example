import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  getAllItemsLocalStorage,
  getLengthLocalStorage,
  removeItemLocalStorage,
} from '@Core/helpers/localstorage/register';
import { create as createRegistration } from '@Core/services/Registration';

export default function useLocalStorage() {
  const [storageLength, setStorageLength] = useState<number>(0);
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);
  const [fetchIndex, setfetchIndex] = useState<number>(0);

  const syncsWithTheAPI = async () => {
    const localStoragData = getAllItemsLocalStorage();
    if (localStoragData && localStoragData.length > 0) {
      setfetchIndex(0);
      await Promise.all(
        localStoragData.map((item: any, index: number) =>
          createRegistration(item).then((data) => {
            if (data.message === 'Message Accepted') {
              removeItemLocalStorage(item.id);
              setfetchIndex(index + 1);
            }
          }),
        ),
      ).finally(() => {
        syncCount();
      });
    }
  };

  const syncCount = () => {
    const data = getLengthLocalStorage();
    const count = data ? data : 0;
    setStorageLength(count);
  };

  const online = () => {
    const status = window.navigator.onLine ? true : false;
    setOnlineStatus(window.navigator.onLine);
    if (status) {
      syncsWithTheAPI();
    }
    toast.info('Conexão reestabelecida', {
      icon: false,
      hideProgressBar: true,
    });
  };

  const offline = () => {
    setOnlineStatus(false);
    toast.info('Conexão perdida', {
      icon: false,
      hideProgressBar: true,
    });
  };

  const changeUpdate = () => {
    const status = window.navigator.onLine ? true : false;
    setOnlineStatus(status);
    syncCount();
    if (status) {
      syncsWithTheAPI();
    }
  };

  // const changeRemove = () => {
  //   setfetchIndex(fetchIndex + 1);
  // };

  useEffect(() => {
    const status = window.navigator.onLine ? true : false;
    setOnlineStatus(status);
    syncCount();
    if (status) {
      syncsWithTheAPI();
    }

    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    window.addEventListener('storageUpdated', changeUpdate);
    // window.addEventListener('storageRemoved', changeRemove);

    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
      window.removeEventListener('storageUpdated', changeUpdate);
      // window.addEventListener('storageRemoved', changeRemove);
    };
  }, []);

  return { onlineStatus, fetchIndex, storageLength };
}
