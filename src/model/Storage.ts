export const lStorage = {
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);

    if (item) {
      return JSON.parse(item);
    }
  },
};

export const sStorage = {
  setItem: (name: string, item: any) => {
    sessionStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name: string) => {
    const item = sessionStorage.getItem(name);

    if (item) {
      return JSON.parse(item);
    }
  },
};
