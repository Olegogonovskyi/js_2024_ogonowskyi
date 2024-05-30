const LocalStorageService = {
    setByKey: (key: string, setDataStor: any) => {
        localStorage.setItem(key, JSON.stringify(setDataStor))
    },
    getByKey: (key: string) => {
        const storageData = localStorage.getItem(key);
        if (storageData === null) {
            return {};
        }
        return JSON.parse(storageData);
            }
}

export {
    LocalStorageService
}