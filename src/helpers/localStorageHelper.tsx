
export const localStorageHelper = <T, >(key: string) => {
    let localStorItem = localStorage.getItem(key) || ''
    if (!localStorItem) {
        return {} as T
    } else {
        return JSON.parse(localStorItem) as T
    }

}