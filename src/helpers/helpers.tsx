
export const helperCarsToken = <T, >(key: string) => {
    const istToken = localStorage.getItem(key) || '';
    if (!istToken) {
        return {} as T;
    }
    const paip = JSON.parse(istToken)
    return paip as T
}