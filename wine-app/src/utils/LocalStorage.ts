export class LocalStorageMethods {
  static setter(key: string, payload: any) {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  static getter(key: string) {
    const getting = localStorage.getItem(key);
    
    return getting ? JSON.parse(getting) : null;
  }

  static deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}