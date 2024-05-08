import {useEffect, useState} from "react";

export const useLocalStorage = <T,>(key: string, defautObject: any ) => {

    const [storageObj, setstorageObj] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defautObject;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storageObj));
    }, [key, defautObject, storageObj]);

    const clearStorage = () => {
        localStorage.removeItem(key);
        setstorageObj(defautObject);
    };

    return [storageObj, setstorageObj, clearStorage]

}