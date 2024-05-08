import {useState} from "react";

export const useLocalStorage = <T,>(key: string, defautObject: any ) => {

    const [storageObj, setstorageObj] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defautObject;
    })

    return [storageObj, setstorageObj]

}