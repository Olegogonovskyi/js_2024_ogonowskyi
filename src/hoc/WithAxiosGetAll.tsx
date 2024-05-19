import {AxiosResponse} from "axios";
import {FC, useEffect, useState} from "react";

export const WithAxiosGetAll = (Component: FC<any>, axiosInstanse: () => Promise<AxiosResponse<any>>) => {

    const WithAxiosGetAllComponent = (props: any) => {

        const [items, setItems] = useState<any>([])
        useEffect(() => {
            axiosInstanse().then(value => setItems(value.data))
        }, []);

        return <Component items={items} {...props}/>
    }
    return WithAxiosGetAllComponent
};