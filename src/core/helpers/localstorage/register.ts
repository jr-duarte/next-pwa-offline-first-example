import { IRegistration } from '@Core/interfaces/IRegistration';
import { v4 as uuidv4 } from 'uuid';

const KeyLocalStorage = 'FysRegisters';

interface ILocalStorage extends IRegistration {
  id?: string;
}

export function setItemLocalStorage(data: ILocalStorage): void {
  const localStorageData = localStorage.getItem(KeyLocalStorage);
  if (localStorageData) {
    const localStorageDataJson = JSON.parse(localStorageData);
    const dataFormat = data;
    dataFormat.id = uuidv4();
    localStorageDataJson.push(dataFormat);
    localStorage.setItem(KeyLocalStorage, JSON.stringify(localStorageDataJson));
    window.dispatchEvent(new Event('storageUpdated'));
  } else {
    const dataFormat = data;
    dataFormat.id = uuidv4();
    const format = [dataFormat];
    localStorage.setItem(KeyLocalStorage, JSON.stringify(format));
    window.dispatchEvent(new Event('storageUpdated'));
  }
}

export function getItemLocalStorage(email: string): IRegistration {
  const localStorageData = localStorage.getItem(KeyLocalStorage);
  let find;
  if (localStorageData) {
    find = JSON.parse(decodeURIComponent(localStorageData)).find(
      (item: any) => item.email === email,
    );
  }
  return find;
}

export function getAllItemsLocalStorage(): IRegistration[] {
  const localStorageData = localStorage.getItem(KeyLocalStorage);
  let format;
  if (localStorageData) {
    format = JSON.parse(decodeURIComponent(localStorageData)).map(
      (item: any) => item,
    );
  }
  return format;
}

export function removeItemLocalStorage(id: string): void {
  const localStorageData = localStorage.getItem(KeyLocalStorage);
  let format;
  if (localStorageData) {
    format = JSON.parse(decodeURIComponent(localStorageData)).filter(
      (item: any) => item.id !== id,
    );
    if (format) {
      localStorage.setItem(KeyLocalStorage, JSON.stringify(format));
      window.dispatchEvent(new Event('storageRemoved'));
    }
  }
}

export function getLengthLocalStorage(): number | undefined {
  const localStorageData = localStorage.getItem(KeyLocalStorage);
  let format;
  if (localStorageData) {
    format = JSON.parse(decodeURIComponent(localStorageData));
    return format.length;
  }
}
